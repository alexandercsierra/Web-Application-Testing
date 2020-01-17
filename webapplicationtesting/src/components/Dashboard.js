import React from 'react'
import {incrementStrike, incrementBall, foul, hit} from './utils/ButtonFunctions'

const Dashboard = (props) => {

    const {setBalls, setStrikes, balls, strikes} = props;

    // const incrementStrike = e => {
    //     e.preventDefault();
    //     console.log(strikes);
    //     if (strikes === 2){
    //         setStrikes(0);
    //         setBalls(0);
    //     } else {
    //         setStrikes(strikes + 1);
    //     }
    // }

    // const incrementBall = e => {
    //     e.preventDefault();
    //     if (balls === 3){
    //         setStrikes(0);
    //         setBalls(0);
    //     } else {
    //         setBalls(balls + 1);
    //     }
    // }

    // const foul = e => {
    //     e.preventDefault();
    //     if (strikes < 2){
    //         setStrikes(strikes + 1);
    //     }
    // }

    // const hit = e => {
    //     e.preventDefault();
    //     setStrikes(0);
    //     setBalls(0);
    // }
    

    return(
        <div>
            <h2>Dashboard</h2>
            <div>
                <button data-testid="strike" onClick={(e)=> incrementStrike(e, strikes, setStrikes, setBalls)}>Strike</button>
                <button data-testid="ball" onClick={e=>incrementBall(e, balls, setStrikes, setBalls)}>Ball</button>
                <button data-testid="foul" onClick={e => foul(e,strikes,setStrikes)}>Foul</button>
                <button data-testid="hit" onClick={e=>hit(e,setStrikes,setBalls)}>Hit</button>
            </div>
        </div>
        
    )
}

export default Dashboard