import React from 'react';

function CardCaracter({name, img,url}) {
    return (
        <a href={url}>
            <div className="cardCaracter">
                <h1 className="cardName">{name}</h1>
                <img className="cardImage" src={img} alt={"image of " + name}/>
            </div>
        </a>
    );
}

export default CardCaracter;