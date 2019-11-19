import React from 'react';
import './card.css'

const Card = (props) => {
    return (
        <figure >
            <img src={props.data.imgUrl} alt="Kanken Backpack" />
            <figcaption>
                <div className="description">
                    <p>{props.data.name}</p>
                </div>
                <div className="price">
                    ${props.data.price}
                </div>
            </figcaption>
        </figure>
    );
}

export default Card;