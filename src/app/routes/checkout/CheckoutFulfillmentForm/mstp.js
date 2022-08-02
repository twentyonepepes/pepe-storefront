import { subtotal } from '../../../selectors/subtotal';
export const mstp = state => {

    const details = state.forms.deliveryDetails;

    return {

        cart:state.cart,
        orderStatus:state.orderStatus,
        formComplete: details.name && details.address && details.email1,
        ...subtotal(state)
        
    
    }

};

export const mdtp = dispatch => ({

    handlePlaceOrder(history){

        dispatch({type:"PLACE_ORDER", history});

    }
})