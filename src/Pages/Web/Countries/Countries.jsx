import React, { useEffect, useState, useRef } from 'react';
import "./Countries.css";
import { TextField } from '../../../Components/MainComponents/TextField';
import { ImageField } from '../../../Components/MainComponents/ImageField';
import { ButtonField } from '../../../Components/MainComponents/ButtonField';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import { InfinityScroll } from '../../../Components/InfinityScroll/InfinityScroll';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { SelectionPage } from '../SelectionPage/SelectionPage';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WorkIcon from '@mui/icons-material/Work';
import { Footer } from '../../../Components/Footer/Footer';
import { TopCourses } from '../TopCourses/TopCourses';
import { Loader } from '../../../Components/Loader/Loader';
import { country } from '../../../StoreData';
import { EnquiryForm } from '../../../Components/EnquiryForm/EnquiryForm';

export const Countries = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [CountryData, setCountryData] = useState({});
    const Temp = [
        {
            name: "UNIVERSITIES",
            count: `${CountryData?.universityCount} +`,
            icon: <AccountBalanceIcon id="CountriesICon" />
        },
        {
            name: "VISA",
            count: `${CountryData?.visa} post study work visa`,
            icon: <CreditScoreIcon id="CountriesICon" />
        },
        {
            name: "PART TIME WORK",
            count: `${CountryData?.partime} hours per week`,
            icon: <EngineeringIcon id="CountriesICon" />
        },
        {
            name: "INTAKE",
            count: `${CountryData?.intake} intakes per year`,
            icon: <WorkIcon id="CountriesICon" />
        }
    ];
    const location = useLocation();
    const scrollRef = useRef(null);

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [location.pathname]);
    const [popup, setpopup] = useState(false)

    const OpenPop = () => {
        setpopup(true)
        // return data.FnCall()
    }

    const close = () => {
        setpopup(false)
    }
    useEffect(() => {
        if (location.state) {
            const countryFind = country.find(ele => ele.country === location.state);
            console.log(countryFind);
            if (countryFind) {
                setCountryData(countryFind);
            }
        }
    }, [location.state]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.state]);
    console.log("location.state>>>>>", location.state)
    return (
        <>
            {location?.state === CountryData?.country ? <div className='HidePage'>
                <div className='CountriesAlign p-5'>
                    <p className='CountriesAlignText'>Study in <span className='CountriesPtagColor'>{CountryData.country}</span></p>
                    <div className='CountriesAlignDivAlign'>
                        <div className='CountriesAlignDivSec'>
                            <ImageField data={{ ImgName: "countrypageimg.jpg", style: "CountriesAlignDivImg" }} />
                        </div>
                        <div className='CountriesAlign2DivSec'>
                            <TextField data={{ style: "CountriesAlign2DivText", Text: CountryData.des }} />
                            <TextField data={{ style: "CountriesAlign2DivText2", Text: "Quick Facts" }} />
                            <div className='CountriesAlign2DivFact'>
                                {Temp.map((ele) => (
                                    <div key={ele.name} className='CountriesAlign2DivInner'>
                                        <div className='CountriesAlign2DivRnd'>
                                            {ele.icon}
                                        </div>
                                        <TextField data={{ style: "Countries2DivText", Text: ele.name }} />
                                        <TextField data={{ style: "Countries2DivText2", Text: ele.count }} />
                                    </div>
                                ))}
                            </div>
                            <ButtonField data={{ designed: true, text: "Talk To An Expert", Fn: OpenPop }} />
                        </div>
                    </div>
                </div>
                <SelectionPage data={{ data: CountryData }} />
                <InfinityScroll data={{ data: CountryData }} />
                <TopCourses />
                <Footer />
                {
                    popup ?
                        <EnquiryForm data={close} />
                        : ""
                }
            </div> :
                <Loader />

            }
        </>
    )
}
