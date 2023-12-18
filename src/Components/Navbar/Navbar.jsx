import React, { useEffect } from 'react'
import "./Navbar.css"
import { ImageField } from '../MainComponents/ImageField'
import { TextField } from '../MainComponents/TextField'
import { InputField } from '../MainComponents/InputField'
import { Search } from '@mui/icons-material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar({ countrie }) {
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>

            <div data-aos="fade-down" className={countrie ? 'Navbar_align2 p-1' : 'Navbar_align p-1'} >
                <div className='Navbar_adjst'>
                    <div className=''>
                        <a href="/">
                            <ImageField data={{ ImgName: "logo (1) 1.png", style: "NavbarLogo" }} />
                        </a>
                    </div>
                    <div className='NavbarSettingGap'>
                        <a href="/#navigate_aboutUs">
                            <TextField data={{ Text: "About", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                        <select value={location?.state} onChange={(e) => { navigate("/countries", { state: e.target.value }) }} className={countrie ? 'NavbarText2Selection2' : "NavbarText2Selection"} name="" id="">
                            <option value="">
                                <TextField data={{ Text: "Countries", style: countrie ? "NavbarText2" : "NavbarText" }} />
                            </option>
                            <option value="ca">Canada</option>
                            <option value="uk">United kingdom</option>
                            <option value="nz">New Zealand</option>
                        </select>
                        <a href="/#navigate_Courses">
                            <TextField data={{ Text: "Courses", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                        <a href="/#navigate_StudentsLove ">
                            <TextField data={{ Text: "Blog", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                        <a href="/#navigate_ContactUs">
                            <TextField data={{ Text: "Contact", style: countrie ? "NavbarText2" : "NavbarText" }} />
                        </a>
                    </div>
                    <div className='NavbarSettingGap2'>
                        <InputField data={{ type: "text", style: "NavbarinpField p-2", palaceholder: "Search Your Institution" }} />
                        <div className='NavbarSearch_icon'>
                            <Search id="NavbarOGICon" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar