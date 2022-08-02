import { subtotal } from '../../../selectors/subtotal';

export const mstp = (state)=>({

    cart: state.cart,
    ...subtotal(state)

});

export const mdtp = dispatch => ({
    handleRemoveItemFromCart(index){

        dispatch({type:"REMOVE_ITEM_FROM_CART_AT_INDEX", index})
    }
})