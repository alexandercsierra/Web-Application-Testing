import React from 'react'

const Display = (props) => {
    return(
        <div>
            <div>I am the display</div>
            <div>
                <div>Balls: {props.balls}</div>
                <div>Strikes: {props.strikes}</div>
            </div>
        </div>
        
        
    )
}

export default Display