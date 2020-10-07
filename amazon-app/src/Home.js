import React from 'react';
import   './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" 
            alt="" 
             />
            
            <Product 

                id="12345686"
                title="Learn React"
                price={11.62}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51S8VABMqeL._SX258_BO1,204,203,200_.jpg"

                />

        </div>

    );
}

export default Home
