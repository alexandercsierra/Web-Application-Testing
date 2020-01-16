import React from 'react'

const Display = (props) => {
    return(
        <div>
            <h2>Display</h2>
            <div>
                <div>Balls: {props.balls}</div>
                <div>Strikes: {props.strikes}</div>
            </div>
        </div>
        
        
    )
}

export default Display