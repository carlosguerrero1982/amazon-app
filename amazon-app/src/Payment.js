import React from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';


function Payment() {

    const [{basket,user},dispatch] = useStateValue();

    
    return (
        <div className="payment">

            <div className="payment_container">

                <div className="payment_section">

                <div className="title">

                    <h3>Delivery address</h3>

                </div>

                <div className="delivery_address">

                    <p></p>

                </div>


                <div className="payment_section">


                </div>


                <div className="payment_section">


                </div>

                
                 </div>

            </div>
            
        </div>
    )
}

export default Payment
