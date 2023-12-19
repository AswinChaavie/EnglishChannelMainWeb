import React, { useEffect } from 'react'
import "./Countries.css"
import Navbar from '../../../Components/Navbar/Navbar'
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { ButtonField } from '../../../Components/MainComponents/ButtonField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom'
import { InfinityScroll } from '../../../Components/InfinityScroll/InfinityScroll'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { SelectionPage } from '../SelectionPage/SelectionPage'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WorkIcon from '@mui/icons-material/Work';
import { Footer } from '../../../Components/Footer/Footer'
import { TopCourses } from '../TopCourses/TopCourses'
export const Countries = () => {
    const Temp = [
        {
            name: "UNIVERSITIES",
            count: "359 plus",
            icon: <AccountBalanceIcon id="CountriesICon" />
        },
        {
            name: "VISA",
            count: "2 year post study work visa",
            icon: <CreditScoreIcon id="CountriesICon" />
        },
        {
            name: "PART TIME WORK",
            count: "20 hour per week",
            icon: <EngineeringIcon id="CountriesICon" />
        }
        ,
        {
            name: "INTAKE",
            count: "2 to 3 intakes per year",
            icon: <WorkIcon id="CountriesICon" />
        }
    ]
    const ca = "Discover Canada's Academic Excellence and Inclusive Community. Click to explore your higher education journey in this vibrant, welcoming nation."
    const nz = "Premium Learning. Lush Diversity. Dive into New Zealand's educational excellence and natural beauty. Click to unravel your academic adventure."
    const uk = "Elite Education. Diverse Culture. Explore the UK's academic prestige and multicultural vibrancy. Click to uncover more about your educational possibilities."
    const location = useLocation();
    console.log("location ===>", location.state)
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);


    return (
        <>
            <Navbar countrie={true} />
            <div className='CountriesAlign p-5'>
                <TextField data={{ style: "CountriesAlignText", Text: `Study in ${location.state === "ca" ? "Canada" : location.state === "nz" ? "New Zealand" : location.state === "uk" ? "United Kingdom" : ""}` }} />
                <div className='CountriesAlignDivAlign'>
                    <div className='CountriesAlignDivSec'>
                        <ImageField data={{ ImgName: "Rectangle 70.png", style: "CountriesAlignDivImg" }} />
                    </div>
                    <div className='CountriesAlign2DivSec'>
                        <TextField data={{ style: "CountriesAlign2DivText", Text: location.state === "ca" ? ca : location.state === "nz" ? nz : location.state === "uk" ? uk : "" }} />
                        <TextField data={{ style: "CountriesAlign2DivText2", Text: "Quick Facts" }} />
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='CountriesAlign2DivFact'>
                            {Temp.map((ele, index) =>
                                <div key={index + 1} className='CountriesAlign2DivInner'>
                                    <div className='CountriesAlign2DivRnd'>
                                        {ele.icon}
                                    </div>
                                    <TextField data={{ style: "Countries2DivText", Text: ele.name }} />
                                    <TextField data={{ style: "Countries2DivText2", Text: ele.count }} />
                                </div>
                            )}
                        </div>
                        <ButtonField data={{ designed: true, text: "Talk To An Expert" }} />
                    </div>
                </div>
            </div>


            <SelectionPage />
            {/* <Admission /> */}
            <InfinityScroll />
           
            <TopCourses />
            <Footer />
        </>
    )
}
