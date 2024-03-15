import React, { useEffect, useState } from 'react'
import "./MobileNavbar.css"
import { ImageField } from "../../../Components/MainComponents/ImageField"
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { country } from '../../../StoreData';
import { TextField } from '../../../Components/MainComponents/TextField';
export const MobileNavbar = () => {
    const [Togler, setTogler] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    const navigateFn = () => {
        navigate("/")
    }
    const goPage = (sec) => {
        console.log("sec>>>>>", sec)
        navigate("/", { state: { data: sec } })
    }
    return (
        <>
            <div className='MobileNavbardis'>
                <div onClick={navigateFn}>
                    <ImageField data={{ style: "MobileNavbarlogo", ImgName: "updatedLogo.png" }} />
                </div>
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
                        <a className='MobileNavbaraTag' onClick={() => { goPage("mob about") }} href="#aboutMob">About</a>
                        <div className='MobileNavbaraSelection'>
                            <select value={location?.state} onChange={(e) => { navigate("/countries", { state: e.target.value }) }} className='NavbarText2Selection2' name="" id="">
                                <option disabled selected value="">
                                    <TextField data={{ Text: "Countries", style: "NavbarText2" }} />
                                </option>
                                {country.map(country =>
                                    <option className='Navbaroptions1' value={country.country}>{country.country}</option>
                                )}
                            </select>
                        </div>
                        <a className='MobileNavbaraTag' href="/blogs">Vlog</a>
                        <a className='MobileNavbaraTag' href="/TopCourses">Course</a>
                        <a className='MobileNavbaraTag' onClick={() => { goPage("mob conatct us") }} href="#contactMob">Contact</a>
                    </div>
                    : ""}
        </>

    )
}
