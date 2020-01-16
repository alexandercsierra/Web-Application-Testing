export const incrementStrike = (e, strikes, setStrikes, setBalls) => {
    e.preventDefault();
    console.log(strikes);
    if (strikes === 2){
        setStrikes(0);
        setBalls(0);
    } else {
        setStrikes(strikes + 1);
    }
}

export const incrementBall = (e, balls, setStrikes, setBalls) => {
    e.preventDefault();
    if (balls === 3){
        setStrikes(0);
        setBalls(0);
    } else {
        setBalls(balls + 1);
    }
}

export const foul = (e, strikes, setStrikes) => {
    e.preventDefault();
    if (strikes < 2){
        setStrikes(strikes + 1);
    }
}

export const hit = (e, setStrikes, setBalls) => {
    e.preventDefault();
    setStrikes(0);
    setBalls(0);
}