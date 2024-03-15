import React, { useEffect, useState } from 'react'
import "./MobileCountry.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../../Components/Navbar/Navbar'
import { TextField } from '../../../Components/MainComponents/TextField'
import { ImageField } from '../../../Components/MainComponents/ImageField'
import { ButtonField } from '../../../Components/MainComponents/ButtonField'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useLocation } from 'react-router-dom';
import { country } from '../../../StoreData';
import { SelectionPage } from '../../Web/SelectionPage/SelectionPage';
import { Admission } from '../../../Components/AdmissionRequirement/Admission';
import { Calculator } from '../../../Components/Calculator/Calculator';
import { PostPermit } from '../../../Components/PostPermit/PostPermit';
import { HighAcademic } from '../../../Components/HighAcademicStandards/HighAcademic';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { InfinityScroll } from '../../../Components/InfinityScroll/InfinityScroll';
import { Footer } from '../../../Components/Footer/Footer';
import { TopCourses } from '../../Web/TopCourses/TopCourses';
import { EnquiryForm } from '../../../Components/EnquiryForm/EnquiryForm';
export const MobileCountry = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [CountryData, setCountryData] = useState({
    });
    const Temp = [
        {
            name: "UNIVERSITIES",
            count: `${CountryData?.universityCount} plus`,
            icon: <AccountBalanceIcon id="CountriesICon" />
        },
        {
            name: "VISA",
            count: `${CountryData?.visa} post study work visa`,
            icon: <CreditScoreIcon id="CountriesICon" />
        },
        {
            name: "PART TIME WORK",
            count: `${CountryData?.partime} hour per week`,
            icon: <EngineeringIcon id="CountriesICon" />
        },
        {
            name: "INTAKE",
            count: `${CountryData?.intake} intakes per year`,
            icon: <WorkIcon id="CountriesICon" />
        }
    ];
    const location = useLocation();
    console.log("location ===>", CountryData)
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();

        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [location.pathname]);
    useEffect(() => {
        if (location.state) {
            const countryFind = country.find(ele => ele.country === location.state)
            console.log(countryFind)
            if (countryFind) {
                setCountryData(countryFind)
            }
        }
    }, [location.state]);
    const [popup, setpopup] = useState(false)

    const OpenPop = () => {
        setpopup(true)
        // return data.FnCall()
    }

    const close = () => {
        setpopup(false)
    }
    return (
        <>
            <div className='MobileCountryAlign'>
                <MobileNavbar />
                <div className='mobileCountriesAlign'>
                    <TextField data={{ style: "mobileCountriesAlignText", Text: `Study in ${CountryData.country}` }} />
                    <div className='mobileCountriesAlignDivAlign'>
                        <div className='mobileCountriesAlignDivSec'>
                            <ImageField data={{ ImgName: "countrypageimg.jpg", style: "mobileCountriesAlignDivImg" }} />
                        </div>
                        <div className='mobileCountriesAlign2DivSec'>
                            <TextField data={{ style: "mobileCountriesAlign2DivText", Text: CountryData.des }} />
                            <TextField data={{ style: "mobileCountriesAlign2DivText2", Text: "Quick Facts" }} />
                            <div className='mobileCountriesAlign2DivFact'>
                                {Temp.map((ele) => (
                                    <div data-aos="fade-right" key={ele.name} className='mobileCountriesAlign2DivInner'>
                                        <div className='mobileCountriesAlign2DivRnd'>
                                            {ele.icon}
                                        </div>
                                        <TextField data={{ style: "mobileCountries2DivText", Text: ele.name }} />
                                        <TextField data={{ style: "mobileCountries2DivText2", Text: ele.count }} />
                                    </div>
                                ))}
                            </div>
                            <div className='mobileCountries2DivButtonAlign'>
                                <ButtonField data={{ designed: true, text: "Talk To An Expert", Fn: OpenPop }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobileCountriesGapSet'>
                    <div>
                        <TextField data={{ style: "mobileAdmissionReqTextAlign", Text: "Admission Requirements" }} />
                        <div className='mobileAdmissionUnder'></div>
                    </div>
                    <Admission data={{ masters: CountryData.masters, bachelors: CountryData.bachelors }} />
                    <div>
                        <TextField data={{ style: "mobileAdmissionReqTextAlign", Text: "Expense Calculator" }} />
                        <div className='mobileAdmissionUnder'></div>
                    </div>
                    <Calculator data={{ data: CountryData }} />
                    {CountryData?.postPermitOpportunity ?
                        <>
                            <div>
                                <TextField data={{ style: "mobileAdmissionReqTextAlign", Text: "Post work permit opportunity" }} />
                                <div className='mobileAdmissionUnder'></div>
                            </div>
                            <PostPermit data={{
                                data: CountryData?.postPermitOpportunity
                            }} />
                        </>
                        : ""}
                    {CountryData?.highAcademicStandard ?
                        <>
                            <div>
                                <TextField data={{ style: "mobileAdmissionReqTextAlign", Text: "High academic standards" }} />
                                <div className='mobileAdmissionUnder'></div>
                            </div>
                            <HighAcademic data={{
                                data: CountryData?.highAcademicStandard
                            }} />
                        </>
                        : ""}
                    <InfinityScroll data={{ data: CountryData }} />
                    <TopCourses />
                </div>

            </div>
            <Footer />
            {
                        popup ?
                            <EnquiryForm data={close} />
                            : ""
                    }
        </>
    )
}
