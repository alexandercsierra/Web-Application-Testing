import React from 'react'

const Display = (props) => {
    return(
        <div>
            <h2>Display</h2>
            <div>
                <div data-testid="ballText">Balls: {props.balls}</div>
                <div data-testid="strikeText">Strikes: {props.strikes}</div>
            </div>
        </div>
        
        
    )
}

export default Display