import React from 'react';
import { connect } from 'react-redux';

import { mstp, mdtp } from './mstp';

import './main.css';
import { useHistory } from 'react-router-dom';

export const CheckoutFulfillmentForm = connect(mstp,mdtp)(({
    subtotal, 
    tax, 
    shipping, 
    handlePlaceOrder, 
    orderStatus, 
    formComplete,
    history = useHistory()
})=>(
    <div>

        <div className="checkout--fulfill-container">
        <table className="order-summary">
            <tbody>

                <tr>

                    <td>

                        Items

                    </td>
                    <td>

                        ${subtotal}

                    </td>

                </tr>

                <tr>

                    <td>

                        Estimated Tax

                    </td>
                    <td>

                        ${tax.toFixed(2)}

                    </td>

                </tr>

                <tr>

                    <td>

                        Estimated Shipping

                    </td>
                    <td>

                        ${shipping.toFixed(2)}

                    </td>

                </tr>

                <tr className="checkout--order-total">

                    <td>

                        Order Total

                    </td>
                    <td>

                        ${(subtotal + tax + shipping).toFixed(2)}

                    </td>

                </tr>

                

            </tbody>
        </table>
        {/* <div className="checkout--fulfill-container--price-summary">

        </div> */}
        <div className="big-green-button" >

            <button onClick={()=>handlePlaceOrder(history)} disabled={orderStatus === "PLACING_ORDER" || !formComplete}>{orderStatus === "PLACING_ORDER" ? "Please wait..." : "Place Your Order"}</button>

        </div>

        </div>
    </div>
));