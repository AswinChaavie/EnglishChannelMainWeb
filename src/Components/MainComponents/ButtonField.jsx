import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const ButtonField = ({ data: { style, text, designed, Fn, index } }) => {
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh(); // Manually refresh AOS on route change
    }, [location.pathname]);
    return (
        <>
            {designed ?
                <button onClick={() => { Fn(index) }} className="AboutUsAlignLetsButton">{text}</button>
                :
                <button onClick={() => { Fn(index) }} className={style}>{text}</button>
            }

        </>
    )
}
