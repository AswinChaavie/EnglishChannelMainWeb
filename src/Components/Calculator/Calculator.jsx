import React, { useEffect } from 'react'
import "./Calculator.css"
import { InputField } from "../MainComponents/InputField"
import { TextField } from '../MainComponents/TextField'
import { ButtonField } from '../MainComponents/ButtonField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom'
export const Calculator = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);
    return (
        <>
            <div className='CalculatorAlign'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='CalculatorAlignSec p-4'>
                    <TextField data={{ style: "CalculatorAlignSecM", Text: "Money you need" }} />
                    <TextField data={{ style: "CalculatorAlignSecCo", Text: "You must have enough money to pay for your course and support yourself in the UK." }} />
                    <TextField data={{ style: "CalculatorAlignSecCo", Text: "How much money you need depends on your circumstances and what you’re applying for." }} />
                    <TextField data={{ style: "CalculatorAlignSecM", Text: "Course fee" }} />
                    <TextField data={{ style: "CalculatorAlignSecCo", Text: "You need enough money to pay for your course for 1 academic year (up to 9 months). The amount you need to pay will be on your Confirmation of Acceptance for Studies (CAS)." }} />
                    <TextField data={{ style: "CalculatorAlignSecCo", Text: "If you’ve been in the UK with a valid visa for at least 12 months, you do not need to prove you have this money for your visa application." }} />
                    <TextField data={{ style: "CalculatorAlignSecM", Text: "Money to support yourself (‘financial requirement’)" }} />
                    <TextField data={{ style: "CalculatorAlignSecCo", Text: "You’ll need to show you have enough money to support yourself." }} />
                    <TextField data={{ style: "CalculatorAlignSecCo", Text: "How much money you need depends on where you will be studying. You’ll need either" }} />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='CalculatorAlignSec2 p-4'>
                    <div className='CalculatorAlignSec2DivAdj'>
                        <TextField data={{ style: "CalculatorAlignSec2Text", Text: "Total Tuition Fee" }} />
                        <InputField data={{ type: "number", style: "CalculatorInput" }} />
                    </div>
                    <div className='CalculatorAlignSec2DivAdj'>
                        <TextField data={{ style: "CalculatorAlignSec2Text", Text: "Tuition Deposit Paid" }} />
                        <InputField data={{ type: "number", style: "CalculatorInput" }} />
                    </div>
                    <div className='CalculatorAlignSec2DivAdj'>
                        <TextField data={{ style: "CalculatorAlignSec2Text", Text: "No. Dependent(s)" }} />
                        <InputField data={{ type: "number", style: "CalculatorInput" }} />
                    </div>
                    <div className='CalculatorAlignSec2DivAdj'>
                        <TextField data={{
                            style: "CalculatorAlignSec2Text", Text: "School Location"
                        }} />
                        <select className='CalculatorInput' name="" id="">
                            <option value="">-Select Location-</option>
                        </select>
                    </div>
                    <div className='CalculatorFlex'>
                        <ButtonField data={{ style: "CalculatorFlexBtn", text: "Convert to your currency" }} />
                        <div className='CalculatorFleTextDiv'>
                            <TextField data={{ style: "CalculatorFleText", Text: "PROOF OF FUND REQUIRED" }} />
                            <TextField data={{ style: "CalculatorFleText", Text: "£" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
