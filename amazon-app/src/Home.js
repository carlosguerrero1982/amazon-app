import React from 'react';
import   './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" 
            alt="" 
             />
            
            <div className="home_row">
           
            <Product 

                id="12345686"
                title="Learn React"
                price={11.62}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51S8VABMqeL._SX258_BO1,204,203,200_.jpg"

                />

                <Product 

                id="12345686"
                title="Learn Angular"
                price={15.62}
                rating={4}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"

                />


                    <Product 

                    id="12345686"
                    title="Learn Angular"
                    price={15.62}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41baW7kKkQL.jpg"

                    />
            
            </div>

            <div className="home_row">

            <Product 

                id="12345686"
                title="Learn React"
                price={11.62}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"

                />

                <Product 

                id="12345686"
                title="Learn Angular"
                price={15.62}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71cDo5746vL._AC_SX466_.jpg"
                />


                
            </div>


            <div className="home_row">

                <Product 

                id="12345686"
                title="Learn Angular"
                price={15.62}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51YUcT86d4L._AC_SX425_.jpg"

                />

               </div> 
                

        </div>

    );
}

export default Home
