import React from "react";
import { connect } from 'react-redux';
import { CartSummary } from "../checkout/CheckoutCartSummary";
import { mstp } from "./mstp";

export const Fulfill = connect(mstp)(({

    cart,
    subtotal,
    tax
    
}) => (
    <div>

        <h2>
            Thank You For Your Order
        </h2>
        <h3>
            Your order has been placed. You will receive an email from thepepestore.com.
        </h3>
        <CartSummary cart={cart} subtotal={subtotal} editable={false}/>

    </div>
));