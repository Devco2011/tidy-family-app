import React, { useEffect, useState } from "react";
import "./countDown.css"


export const CountDown = () => {
    const calculateTimeLeft = () => {
        var d = new Date();
        const difference = +d.setDate(d.getDate() + 7) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),

            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}left this week!
            </span>
        );
    });
    return (
        <div className="countDown">


            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}
