import React from 'react';
import 'tachyons';

const Card = (props) => {
    return (
        <div className = " bg-light-pink dib br3 pa1 ma2 grow bw2 shadow-3">
            <img alt = "robot" src = {`https://robohash.org/ ${props.id} ?200x200`} />
            <h4>{props.name}</h4>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;