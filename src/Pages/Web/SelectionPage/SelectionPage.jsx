import React, { useState } from 'react';
import "./SelectionPage.css";
import { ButtonField } from '../../../Components/MainComponents/ButtonField';
import { Admission } from '../../../Components/AdmissionRequirement/Admission';
import { Calculator } from '../../../Components/Calculator/Calculator';
export const SelectionPage = () => {
    const ButtonData = ["Admission Requirements", "Expense Calculator", "Post Work Permit Opportunity", "High academic Standards"];
    const [ButtonFalse, setButtonFalse] = useState({
        "Admission Requirements": true,
        "Expense Calculator": false,
        "Post Work Permit Opportunity": false,
        "High academic Standards": false,
    });
    const conditionChange = (Text) => {
        setButtonFalse({ ...Object.fromEntries(Object.keys(ButtonFalse).map(key => [key, key === Text])) });
    };
    return (
        <>
            <div className="SelectionAlign p-5">
                <div className="SelectionSec p-3">
                    <div className="SelectionButtonSec">
                        {ButtonData.map((ele, index) => (
                            <ButtonField
                                key={index}
                                data={{
                                    style: ButtonFalse[ele] ? "SelectionButtonField" : "SelectionButtonField2",
                                    text: ele,
                                    Fn: conditionChange,
                                }}
                            />
                        ))}
                    </div>
                    <div className='SelectionUnderField p-3'>
                        {ButtonFalse['Admission Requirements'] ? <Admission /> :
                            ButtonFalse['Expense Calculator'] ?
                                < Calculator />
                                : ""
                        }
                    </div>

                </div>
            </div>
        </>
    );
};
