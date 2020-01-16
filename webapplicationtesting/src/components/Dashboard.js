import React from 'react'

const Dashboard = (props) => {

    const {setBalls, setStrikes, balls, strikes} = props;

    const incrementStrike = e => {
        e.preventDefault();
        console.log(strikes);
        if (strikes === 2){
            setStrikes(0);
            setBalls(0);
        } else {
            setStrikes(strikes + 1);
        }
    }

    const incrementBall = e => {
        e.preventDefault();
        if (balls === 3){
            setStrikes(0);
            setBalls(0);
        } else {
            setBalls(balls + 1);
        }
    }
    

    return(
        <div>
            <div>I am the dashboard</div>
            <div>
                <button onClick={incrementStrike}>Strike</button>
                <button onClick={incrementBall}>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        </div>
        
    )
}

export default Dashboard