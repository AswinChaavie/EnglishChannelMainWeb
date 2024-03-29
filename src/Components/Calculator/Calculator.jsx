import React, { useEffect, useState } from 'react'
import "./Calculator.css"
import { InputField } from "../MainComponents/InputField"
import { TextField } from '../MainComponents/TextField'
import { ButtonField } from '../MainComponents/ButtonField'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom'
export const Calculator = ({ data }) => {
    const location = useLocation();
    const [calculatordata, setcalculatordata] = useState({})
    const [total, settotal] = useState(0)
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [location.pathname]);

    const InputOnchange = (e) => {
        setcalculatordata((prevData) => {
            return { ...prevData, [e.target.name]: parseInt(e.target.value) };
        });
        settotal(0)
    }
    const calculate = async () => {
        try {
            let total = ""
            total = await calculatordata.tuition - calculatordata.scholarship
            total -= await calculatordata.deposit
            total += await calculatordata.location
            if (total > 0) {
                await settotal(total)
            }
        } catch (error) {
            console.log(error)
        }

    }
    console.log("data>>>>>",data)
    return (
        <>
            {/* {data?.data?.country === "United Kingdom (UK)" ?
                <div data-aos="fade-right"
                    className='CalculatorAlign'>
                    <div className='CalculatorAlignSec p-4'>
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
                    <div className='CalculatorAlignSec2 p-4'>
                        <div className='CalculatorAlignSec2DivAdj'>
                            <TextField data={{ style: "CalculatorAlignSec2Text", Text: "Tuition fee" }} />
                            <InputField data={{ type: "number", style: "CalculatorInput", name: "tuition", InputOnchange }} />
                        </div>
                        <div className='CalculatorAlignSec2DivAdj'>
                            <TextField data={{ style: "CalculatorAlignSec2Text", Text: "Scholarship Awarded" }} />
                            <InputField data={{ type: "number", style: "CalculatorInput", name: "scholarship", InputOnchange }} />
                        </div>
                        <div className='CalculatorAlignSec2DivAdj'>
                            <TextField data={{ style: "CalculatorAlignSec2Text", Text: "Deposit Paid" }} />
                            <InputField data={{ type: "number", style: "CalculatorInput", name: "deposit", InputOnchange }} />
                        </div>
                        <div className='CalculatorAlignSec2DivAdj'>
                            <TextField data={{
                                style: "CalculatorAlignSec2Text", Text: "School Location"
                            }} />
                            <select onChange={InputOnchange} className='CalculatorInput' name="location" id="">
                                <option selected disabled value="">-Select Location-</option>
                                <option value="12006">London</option>
                                <option value="9207">others</option>
                            </select>
                        </div>
                        <div className='CalculatorFlex'>
                            <ButtonField data={{ style: "CalculatorFlexBtn", text: "Convert to your currency", Fn: calculate }} />
                            <div className='CalculatorFleTextDiv'>
                                <TextField data={{ style: "CalculatorFleText", Text: "PROOF OF FUND REQUIRED" }} />
                                <TextField data={{ style: "CalculatorFleText", Text: `£ ${total}` }} />
                            </div>
                        </div>
                    </div>
                </div>
                : */}
            {data?.data?.expense?.th ?
                <div data-aos="fade-right" className='PostPermitAlign'>
                    <table border={1} className='PostPermitable'>
                        <tr>
                            {data?.data?.expense?.th?.map((highAc, index) =>
                                <th>{highAc}</th>
                            )}
                        </tr >
                        {data?.data?.expense?.td?.map((highAc, index) =>
                            <>
                                <tr>
                                    <td>{highAc.tc1}</td>
                                    <td>{highAc.tc2}</td>
                                    {highAc.tc3 ?
                                        <td>{highAc.tc3}</td>
                                        : ""

                                    }
                                </tr>
                            </>
                        )}
                    </table>
                </div >
                :
                <div className='PostPermitAlign'>
                    {data?.data?.expense?.map(highAc =>
                        <>
                            {highAc?.title ?
                                <h3 data-aos="fade-right" className='PostPermitHtag'>{highAc.title}</h3>
                                : " "
                            }
                            {
                                highAc?.li ?
                                    <ul className='PostPermitUl'>
                                        {
                                            highAc?.li.map(li =>
                                                <li data-aos="fade-right" >{li}</li>
                                            )
                                        }
                                    </ul>
                                    : ""
                            }

                            {
                                highAc?.content ?
                                    <div data-aos="fade-right">
                                        <TextField data={{ Text: highAc?.content, style: "PostPermitTextField" }} />
                                    </div>
                                    : " "
                            }
                            {
                                highAc?.h ?
                                    <h5 data-aos="fade-right" className='PostPermitH4'>{highAc?.h}</h5>
                                    : " "
                            }
                        </>
                    )}

                </div>

            }
            {/* } */}
        </>
    )
}
