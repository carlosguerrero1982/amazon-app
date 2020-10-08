import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';



function Checkout() {


    const [{basket}] =  useStateValue();



    return (
        <div className="checkout">
            
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
    
            {basket?.length===0 ? (

                <div>

             <h2>Your basket is empty</h2>
            <p>Have no items in your basket. To buy a new one click on "Add to basket"</p>   
               
                </div>

            ):(
                <div>

                <h2>Your Basket</h2>
                
                </div>
            )
        
        }
        </div>
    )
}

export default Checkout
