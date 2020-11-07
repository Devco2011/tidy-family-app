import React, { Component } from 'react'
import wheel from "../images/wheel.png"
import './wheel.css'


import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

export const Wheel = () => {
    const segments = ["You get ice cream!", "You get another new toy!", "A new game!", "You get dinner date!", "Get a new sweater!", "Get a new car!", "Get a new shirt!", "Get a candy bar!"];





    const segColors = [
        "#EE4040",
        "#F0CF50",
        "#815CD1",
        "#3DA5E0",
        "#34A24F",
        "#F9AA1F",
        "#EC3F3F",
        "#FF9000",
    ];
    const onFinished = (winner) => {

        console.log(winner);
    }
    console.log(segments)
    return <div className="wheelOfPrizes">
        <p><img width="60%" src={wheel} alt="Wheel of Prizes"></img></p>
        <WheelComponent
            segments={segments}
            segColors={segColors}

            onFinished={(winner) => onFinished(winner)}
            primaryColor='white'
            contrastColor='black'
            buttonText='SPIN' />
    </div>
}