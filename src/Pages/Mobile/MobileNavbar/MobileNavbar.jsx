import React, { useEffect, useState } from 'react'
import "./MobileNavbar.css"
import { ImageField } from "../../../Components/MainComponents/ImageField"
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const MobileNavbar = () => {
    const [Togler, setTogler] = useState(false)
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            <div className='MobileNavbardis'>
                <ImageField data={{ style: "MobileNavbarlogo", ImgName: "Untitled-1.png" }} />
                <div className='MobileNavbarend'>
                    <div onClick={() => { setTogler(Togler ? false : true) }}>
                        <MenuIcon id="MobileNavbarMenu" />
                    </div>
                </div>
            </div>
            {
                Togler ?
                    <div data-aos="fade-down"
                        className='MobileNavbarLinks'>
                        <a className='MobileNavbaraTag' href="#aboutMob">About</a>
                        <a className='MobileNavbaraTag' href="#countriesMob">Coutries</a>
                        <a className='MobileNavbaraTag' href="#studentsMob">Blog</a>
                        <a className='MobileNavbaraTag' href="#courseMob">Course</a>
                        <a className='MobileNavbaraTag' href="#contactMob">Contact</a>
                    </div>
                    : ""}
        </>

    )
}
