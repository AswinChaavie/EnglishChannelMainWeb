import React, { useState } from 'react';
import "./SelectionPage.css";
import { ButtonField } from '../../../Components/MainComponents/ButtonField';
import { Admission } from '../../../Components/AdmissionRequirement/Admission';
import { Calculator } from '../../../Components/Calculator/Calculator';

export const SelectionPage = () => {
    const ButtonData = ["Admission Requirements", "Expense Calculator", "Post Work Permit Opportunity", "High academic Standards"];
    const [activeButton, setActiveButton] = useState(1);
    const conditionChange = (index) => {
        setActiveButton(index);
    };

    return (
        <>
            <div className="SelectionAlign p-5">
                <div className="SelectionSec p-3">
                    <div className="SelectionButtonSec">
                        {ButtonData.map((ele, index) => (
                            <div
                                key={index}
                                className={`SelectionButtonDiv ${activeButton === index + 1 ? 'active' : ''}`}
                                onClick={() => conditionChange(index + 1)}
                                style={{
                                    borderRadius: index + 1 === 1 ? '40px 0 0 0' : index + 1 === ButtonData.length ? '0 40px 0 0' : "",
                                    borderBottomLeftRadius: activeButton === index ? '60px' : '0',
                                    padding: activeButton === 1 ? '0 0 0 9px' : activeButton === ButtonData.length ? '0 9px 0 0' : '0',
                                    borderBottomRightRadius: activeButton === index + 2 ? '60px' : '0',
                                }}
                            >
                                <ButtonField
                                    data={{
                                        style: activeButton === index + 1 ? "SelectionButtonField" : "SelectionButtonField2",
                                        text: ele,
                                        index: index + 1,
                                        Fn: conditionChange,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='SelectionUnderField p-3'>
                        {activeButton === 1 ? <Admission /> :
                            activeButton === 2 ? <Calculator /> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
