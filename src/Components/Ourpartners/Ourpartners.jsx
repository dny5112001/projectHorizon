import React from 'react';
import './Ourpartners.css';
import jaquarlogo from '../Assets/jaquarlogo.png';
import hindwarelogo from '../Assets/hindwarelogo.jpg'
import kajarialogo from '../Assets/Kajarialogo.avif'
import nitcologo from '../Assets/nitcologo.png'
import johnsonlogo from '../Assets/johnsonlogo.png'

const Ourpartners = () => {
    const partners = [
        {
            name:"Jaquar",
            img:jaquarlogo,
        },
        {
            name:"Hinware",
            img:hindwarelogo,
        },
        {
            name:"Kajaria",
            img:kajarialogo,
        },
        {
            name:"Nitco",
            img:nitcologo,
        },
        {
            name:"Johnson",
            img:johnsonlogo,
        },
        {
            name:"Jaquar",
            img:jaquarlogo,
        },
        {
            name:"Jaquar",
            img:jaquarlogo,
        },
        {
            name:"Jaquar",
            img:jaquarlogo,
        },
    ];

    return (
<div className='partners'>
            <h1>Top Brands</h1>
            <hr />
            <div className='partner-container'>
                {partners.map((item, index) => (
                    <div key={index} className='partner-item'>
                        <img src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ourpartners;
