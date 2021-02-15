import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'> 
            <h1>Check out the Epic Destinations!</h1>
            <div className="crads__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                            text='Explore the hidden waterfalls deep inside the Amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>                    
                </div>
            </div>
        </div>
    )
}

export default Cards
