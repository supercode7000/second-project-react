import React from 'react';

const Info = (props) => {
    console.log(props)
    return (
        <article>
            <h1>{props.person.name}</h1>
            <h3>{props.person.age}</h3>
            <h5>{props.person.city}</h5>
        </article>);
}

export default Info;