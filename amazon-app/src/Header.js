import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return  (
    
   
        <nav className="header">


        <Link to="/">

          <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          
            alt=""
          
          />
          
          
      </Link>

      <div className="header_search">

        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"/>

      </div>


      <div className="headerNav">

      <Link to="/login" className="header_link">

         <div className="header_option">

             <span className="headeroptionLineOne">Hello</span>
            <span className="headeroptionLineTwo">SIGN IN</span>

         </div>

      </Link>



      <Link to="/" className="header_link">

         <div className="header_option">

             <span className="headeroptionLineOne">Returns</span>
            <span className="headeroptionLineTwo">& Orders</span>

         </div>

      </Link>



      <Link to="/" className="header_link">

         <div className="header_option">

             <span className="headeroptionLineOne">Your</span>
            <span className="headeroptionLineTwo">Prime</span>

         </div>

      </Link>


      <Link to="/checkout" className="header_link">
        
        <div className="header_optionBasket">

        <ShoppingBasketIcon />

        <span className="headeroptionLineTwo basket_count">0</span>
        </div>
     
     </Link>

     </div>


     

  </nav>

        

    );    
    
}

export default Header
