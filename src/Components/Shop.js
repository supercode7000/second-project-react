import React from 'react';
import data from '../data'
import Card from './Card'
import './shop.css'

const Shop = () => {
    console.log(data)
    const shop = data.map(data => <Card key={data.id} data={data} />)
    return (
        <section>
            {shop}
        </section>
    );
}

export default Shop;