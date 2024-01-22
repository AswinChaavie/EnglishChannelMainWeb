import React, { useEffect } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { TrackballControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/TrackballControls.js";
import { OBJLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/OBJLoader.js";
import { MeshSurfaceSampler } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/math/MeshSurfaceSampler.js";
import "./WorldAnnimation.css";

const WorldAnimation = () => {
    useEffect(() => {
        console.clear();
        window.THREE = THREE;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 640 / 380, 0.1, 1000); // Set initial aspect ratio
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(680, 400);
        const container = document.getElementById("yourThreeJSContainer");
        container.innerHTML = "";
        container.appendChild(renderer.domElement);
        camera.position.z = 250;
        camera.position.y = 100;
        const controls = new TrackballControls(camera, renderer.domElement);
        controls.noPan = true;
        controls.maxDistance = 600;
        controls.minDistance = 150;
        controls.rotateSpeed = 2;
        controls.noZoom = true; // Disable zooming
        const group = new THREE.Group();
        scene.add(group);
        group.rotation.y = 1;

        let subgroups = [];

        let airplane = new THREE.Group();
        new OBJLoader().load("https://assets.codepen.io/127738/Airplane_model2.obj", (obj) => {
            airplane = obj;
            const mat = new THREE.MeshPhongMaterial({
                emissive: 0xffffff,
                emissiveIntensity: 0.3,
            });
            airplane.children.forEach((child) => {
                child.geometry.scale(0.013, 0.013, 0.013);
                child.geometry.translate(0, 122, 0);
                child.material = mat;
            });
            let angles = [0.3, 1.3, 2.14, 2.6];
            let speeds = [0.008, 0.01, 0.014, 0.02];
            let rotations = [0, 2.6, 1.5, 4];
            for (let i = 0; i < 4; i++) {
                const g = new THREE.Group();
                g.speed = speeds[i];
                subgroups.push(g);
                group.add(g);
                const g2 = new THREE.Group();
                let _airplane = airplane.clone();
                g.add(g2);
                g2.add(_airplane);
                g2.rotation.x = rotations[i];
                g.rotation.y = angles[i];
                // Reverse airplane rotation
                g.reverse = i < 2;
                if (i < 2) {
                    _airplane.children[0].geometry = airplane.children[0].geometry.clone().rotateY(Math.PI);
                }
            }
        });

        let sampler = [];
        let earth = null;
        let paths = [];
        new OBJLoader().load(
            "https://assets.codepen.io/127738/NOVELO_EARTH.obj",
            (obj) => {
                earth = obj.children[0];
                earth.geometry.scale(0.35, 0.35, 0.35);
                earth.geometry.translate(0, -133, 0);
                let positions = Array.from(earth.geometry.attributes.position.array).splice(0, 3960 * 3);
                const landGeom = new THREE.BufferGeometry();
                landGeom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
                const land = new THREE.Mesh(landGeom);
                positions = Array.from(earth.geometry.attributes.position.array).splice(3960 * 3, 540 * 3);
                const waterGeom = new THREE.BufferGeometry();
                waterGeom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
                waterGeom.computeVertexNormals();
                const waterMat = new THREE.MeshLambertMaterial({ color: "#ED145C", transparent: true, opacity: 1 });
                const water = new THREE.Mesh(waterGeom, waterMat);
                group.add(water);
                const light = new THREE.HemisphereLight(0xccffff, 0x000033, 1);
                scene.add(light);
                sampler = new MeshSurfaceSampler(land).build();
                // for (let i = 0; i < 24; i++) {
                //     const path = new Path();
                //     paths.push(path);
                //     group.add(path.line);
                // }

                renderer.setAnimationLoop(render);
            },
            (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
            (err) => console.error(err)
        );

        const tempPosition = new THREE.Vector3();
        const lineMaterial = new THREE.LineBasicMaterial({ color: "#FFFFFFC7", transparent: true, opacity: 0.6 });
        class Path {
            constructor() {
                this.geometry = new THREE.BufferGeometry();
                this.line = new THREE.Line(this.geometry, lineMaterial);
                this.vertices = [];

                sampler.sample(tempPosition);
                this.previousPoint = tempPosition.clone();
            }
            update() {
                let pointFound = false;
                while (!pointFound) {
                    sampler.sample(tempPosition);
                    if (tempPosition.distanceTo(this.previousPoint) < 12) {
                        this.vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
                        this.previousPoint = tempPosition.clone();
                        pointFound = true;
                    }
                }
                this.geometry.setAttribute("position", new THREE.Float32BufferAttribute(this.vertices, 3));
            }
        }
        function render(a) {
            group.rotation.y += 0.001;

            subgroups.forEach((g) => {
                g.children[0].rotation.x += g.speed * (g.reverse ? -1 : 1);
            });

            paths.forEach((path) => {
                if (path.vertices.length < 35000) {
                    path.update();
                }
            });

            controls.update();
            renderer.render(scene, camera);
        }

        window.addEventListener("resize", onWindowResize, false);

        function onWindowResize() {
            const newAspect = container.offsetWidth / container.offsetHeight;
            camera.aspect = newAspect;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
    }, []);

    return <div id="yourThreeJSContainer" className="three-container"></div>;
};

export default WorldAnimation;