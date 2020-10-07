import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';




function Product ({id,title,image,price,rating}) {
    return (
        <div className="product">
            
            <p>{title}</p>
            <p className="price">
                <small>€</small>
                 <strong>{price}</strong>
            </p>

            <p>{image}</p>

            <div className="product_rating">

            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p> <StarIcon /> </p>

                ))

            }

            </div>
           
            
           

        </div>
    )
}

export default Product
