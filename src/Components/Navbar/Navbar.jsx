import React, { useEffect } from 'react'
import "./Navbar.css"
import { ImageField } from '../MainComponents/ImageField'
import { TextField } from '../MainComponents/TextField'
import { InputField } from '../MainComponents/InputField'
import { Search } from '@mui/icons-material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { country } from '../../StoreData'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
function Navbar({ countrie }) {
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();

    }, [location.pathname]);
    const goPage = (sec) => {
        console.log("sec>>>>>", sec)
        navigate("/")
    }
    return (
        <>
        <ToastContainer/>
            <div className={countrie ? 'Navbar_align2 p-1' : 'Navbar_align p-1'} >
                <div className='Navbar_adjst'>
                    <div className=''>
                        <a href="/">
                            <ImageField data={{ ImgName: !countrie ? "updateWhiteLogo.png" : "updatedLogo.png", style: !countrie ? "NavbarLogo" : "NavbarLogo2" }} />
                        </a>
                    </div>
                    <div className='NavbarSettingGap'>
                        <a onClick={() => { goPage("contact us") }} href="#navigate_aboutUs">
                            <TextField data={{ Text: "About", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                        <select value={location?.state} onChange={(e) => { navigate("/countries", { state: e.target.value }) }} className={countrie ? 'NavbarText2Selection2' : "NavbarText2Selection"} name="" id="">
                            <option disabled selected value="">
                                <TextField data={{ Text: "Countries", style: countrie ? "NavbarText2" : "NavbarText" }} />
                            </option>
                            {country.map(country =>
                                <option className={countrie ? 'Navbaroptions1' : "Navbaroptions"} value={country.country}>{country.country}</option>
                            )}

                        </select>
                        <a href="/TopCourses">
                            <TextField data={{ Text: "Courses", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                        <a onClick={() => { navigate("/blogs") }}>
                            <TextField data={{ Text: "Vlog", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                        <a href="#navigate_ContactUs" onClick={() => { goPage("contact us") }} >
                            <TextField data={{ Text: "Contact", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar