import React, { useState } from 'react';
import "./SelectionPage.css";
import { ButtonField } from '../../../Components/MainComponents/ButtonField';
import { Admission } from '../../../Components/AdmissionRequirement/Admission';
import { Calculator } from '../../../Components/Calculator/Calculator';
import { PostPermit } from '../../../Components/PostPermit/PostPermit';
import { HighAcademic } from '../../../Components/HighAcademicStandards/HighAcademic';

export const SelectionPage = ({ data }) => {
    const ButtonData = ["Admission Requirements", "Expense Details", "Post-Study Work Opportunity", `Why ${data.data.country} ?`];
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
                        {activeButton === 1 ? <Admission data={{ masters: data?.data?.masters, bachelors: data?.data?.bachelors }} /> :
                            activeButton === 2 ? <Calculator data={data} /> :
                                activeButton === 3 ? <PostPermit data={{
                                    data: data.data.postPermitOpportunity
                                }} /> :
                                    activeButton === 4 ? <HighAcademic data={{
                                        data: data.data.highAcademicStandard
                                    }} /> : ""

                        }
                    </div>
                </div>
            </div>
        </>
    );
};
