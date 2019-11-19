import React from 'react';
import Info from './Info'
import dataPerson from '../data/dataPerson'

const InfoAll = () => {
    const persons = dataPerson.map(person =>
        <Info

            person={person}
        // name={person.name}
        // age={person.age}
        // city={person.city}

        />)
    console.log(persons)
    return (
        <section>
            {persons}
        </section>);
}

export default InfoAll;