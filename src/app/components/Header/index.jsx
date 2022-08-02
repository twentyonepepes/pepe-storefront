import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

export const HeaderDisplay = ({cart})=>{
    return (
        <div className="header-container">

            <div className='header-top'>

                <div className="header-top--left">
                    <Link to="/">

                        <h1 className="header-top--store-title">

                            THE PEPE STORE

                        </h1>

                    </Link>
                </div>

                <div className="header-top--right">

                    {/* <span> */}

                    <Link to={cart.length > 0 ? "/checkout" : "/browse"}>

                            <h2 className="header-top--cart-info">

                                (<span className="header-top--cart-info-number">{cart.length}</span>)  CART

                            </h2>
                            
                            
                        </Link>

                    {/* </span> */}


                    
                </div>
            

            </div>

            <div className="header-bottom">

                <ul>
                    <Link to="/browse/tshirts">
                        <li>
                            t-shirts
                        </li>
                    </Link>
                    <Link to="/browse/sweaters">
                        <li>
                            sweaters
                        </li>                    
                    </Link>
                    <Link to="/browse/towels">
                        <li>
                            towels
                        </li>     
                    </Link>
                </ul>
            </div>

            <div className="clearfix"></div>

            

        </div>
        
    
    )
}

export const Header = connect((state)=>({cart: state.cart}))(HeaderDisplay);