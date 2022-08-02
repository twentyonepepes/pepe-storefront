import React from 'react';
import { connect } from 'react-redux';


import { mdtp, mstp } from './mstp';

import './main.css';
import { Redirect } from 'react-router-dom';
import { ProductImage } from '../../../components/ProductImage';
import { ItemDetailText } from '../../../components/ItemDetailText';

export const CartSummary = ({

    cart,
    subtotal,
    editable = true,

    handleRemoveItemFromCart

})=>(
    <div>
           <h2>

                Your Order from the Pepe Store

            </h2>

            {cart.length === 0 ? <Redirect to="/"/> : null}

            <div className="checkout--item-summary-container">            

                {cart.map((item,index) => (
                    <div className="checkout--item-summary" key={index}>
                        <div className="checkout--item-summary--image-container">
                            <ProductImage productId={item.productId}/>
                        </div>
                        <div className="checkout--item-summary--info">

                            <ItemDetailText productId={item.productId}/>

                            {editable ? <a href="#" onClick={()=>handleRemoveItemFromCart(index)}> Remove From Cart </a> : null}

                        </div>

                        <div className="checkout--item-summary--price">

                            ${item.priceUSD}

                        </div>
                        
                    </div>
                ))}

                <div className="checkout--subtotal">

                    ${subtotal}

                </div>

            </div>

    </div>
);

export const CheckoutCartSummary = connect(mstp, mdtp)(CartSummary);