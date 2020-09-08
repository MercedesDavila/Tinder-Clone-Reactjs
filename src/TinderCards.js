import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {

    const [people, setpeople] = useState([
        {
            name:'Steve Jobs',
            url:'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name:'Mark Zuckerberg',
            url:'https://imagenes.iberoeconomia.es/wp-content/uploads/2020/08/08234200/Mark-Zuckerberg-Surfing.jpg'
        }
    ])
    //const people = [];
    // people.push('abc','def')


    return (
        <div>
            <h1>Tinder Cards</h1>

            <div className="tinderCards_cardContainer">
                {people.map(person => (
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}>

                        <div style={{ backgroundImage: `url(${person.url})`}} 
                        className='card'>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>          
        </div>
    );
}

export default TinderCards
