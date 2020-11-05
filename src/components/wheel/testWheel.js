import React, { useContext, useEffect } from "react"
import { WheelAwardContext } from "../wheelAwards/WheelAwardsProvider"

import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

export const Wheel = () => {
    let segments = [];
    let familyWheelAwards = [];

    const { wheelAwards, getWheelAwards } = useContext(WheelAwardContext)


    useEffect(() => {
        getWheelAwards()
    }, [])

    const getFamWheelAwards = () => {
        let newFamWheelAwards = wheelAwards.filter(wheelAward => wheelAward.familyId === parseInt(localStorage.getItem("family_id")))
        console.log(newFamWheelAwards)
        return familyWheelAwards.push(...newFamWheelAwards)

    }

    // Map over familyChores and get the points value for each chore

    const getAwardNames = () => {

        return segments = familyWheelAwards.map((familyAward) => familyAward.name)

    }
    getFamWheelAwards()
    getAwardNames()
    console.log(segments)
    // let segments = wheelAwards.map(wheelAward => {
    //     if (wheelAward.familyId === parseInt(localStorage.getItem("family_id")))
    //         console.log(`${wheelAward.name}`)
    //     return `${wheelAward.name}`
    // })

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

    return <WheelComponent
        segments={segments}
        segColors={segColors}

        onFinished={(winner) => onFinished(winner)}
        primaryColor='white'
        contrastColor='black'
        buttonText='Spin' />
}