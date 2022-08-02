import React from 'react';

import { CheckoutCartSummary } from './CheckoutCartSummary';
import { CheckoutDeliveryForm } from './CheckoutDeliveryForm';
import { CheckoutFulfillmentForm } from './CheckoutFulfillmentForm';

export const CheckoutRoute = () => (

        <div>

            <CheckoutCartSummary />

            <CheckoutDeliveryForm />

            <CheckoutFulfillmentForm />

        </div>

);