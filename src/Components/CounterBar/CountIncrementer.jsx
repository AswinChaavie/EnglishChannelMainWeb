import React, { useEffect, useState } from 'react'
import { TextField } from '../MainComponents/TextField';

export default function CountIncrementer({ data: { label, number } }) {
    const [Count, setCount] = useState(0)
    useEffect(() => {
        let start = 0;
        const duration = "2"
        const end = parseInt(number.substring(0, 3))
        // if zero, return
        if (start === end) return;
        // find duration per increment
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;
        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === end) clearInterval(timer)
        }, incrementTime);

        // dependency array
    }, [number]);
    return (
        <>
            <TextField
                data={{
                    style: "CounterText",  // This suggests a style named "CounterText" is applied to the TextField
                    Text: `${Count.toLocaleString('en-US')} +`  // The text content of the TextField, possibly displaying a count with locale-specific formatting and a plus sign
                }}
            />
            <TextField data={{ style: "CounterTextNm2", Text: label }} />

        </>
    )
}
