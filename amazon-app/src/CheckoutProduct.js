import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {


    const [{basket},dispatch] =  useStateValue();

    const removeBasket = ()=> {

        dispatch({

            type:'REMOVE_FROM_BASKET',
            id: id,

        });

    }


    return (
        <div className="checkoutproduct">
            
        <img src={image} alt="" />

        <div className="checkoutproduct_info">

            <p className="checkoutproduct_title">{title}</p>

            <p className="checkoutproduct_price">
                
                    <small>€</small>
                    <strong>{price}</strong>
                
            </p>

            <div className="checkoutproduct_rating">


            {
                Array(rating)
                .fill()
                .map((_)=>(
                    
                    <p> <StarIcon   style={{fill: "yellow"}}/> </p>
                    
                ))

            }

            

            </div>

            <button onClick={removeBasket}>Remove from basket</button>
        </div>
     
        </div>
    );
}

export default CheckoutProduct
