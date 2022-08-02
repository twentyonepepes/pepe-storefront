import React from 'react';
import { connect } from 'react-redux';

import { mstp, mdtp } from './mstp';

import './main.css';

export const CheckoutDeliveryForm = connect(mstp, mdtp)(({

    form,
    handleFormUpdate

})=>(
    <div>

        <div className="checkout--delivery-form-container">

        <form>

            <div className="checkout--delivery-form--segment">
                <label>Name</label>
                <input type="text" placeholder="e.g., Feels Goodman" value={form.name || ""} onChange={(evt)=>handleFormUpdate("name", evt.target.value)}/>
            </div>

            <div className="checkout--delivery-form--segment">
                <label>Full Delivery Address</label>
                <input type="text" placeholder="e.g, 742 Evergreen Terrace" value={form.address || ""} onChange={(evt)=>handleFormUpdate("address", evt.target.value)}/>
            </div>

            <div className="checkout--delivery-form--segment">
                <label>Email</label>
                <input type="text" placeholder="e.g., feels@good.man" value={form.email1 || ""} onChange={(evt)=>handleFormUpdate("email1", evt.target.value)}/>
            </div>
{/* 
            <div className="checkout--delivery-form--segment">
                <label>Confirm Email</label>
                <input type="text" placeholder="e.g., feels@good.man"  value={form.email2 || ""} onChange={(evt)=>handleFormUpdate("email2", evt.target.value)}/>
            </div> */}


            <p>
                You will receive an email from info@thepepestore.com with instructions for payment. Acceptable forms of payment include INTERAC Transfer, Paypal, Bitcoin, Ethereum or Doge. Your apparel will be shipped directly to you from the manufacturer. (Your delivery details will be shared with them only.)
            </p>

        </form>
        </div>

    

    </div>
));