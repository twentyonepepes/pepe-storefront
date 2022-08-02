import { defaultState } from './defaultState';
export function reducer(state = defaultState, action){

    switch (action.type) {

        case "SET_INVENTORY" : {
            return {

                ... state,
                inventory:[...action.inventory]

            }
        }

        case "ADD_ITEM_TO_CART" : {
            return {
                
                ...state,
                cart:[...state.cart, action.product],
                pageseq:[...state.pageseq, {nonseq : action.nonseq}] // i have to admit i have no idea what this is
            }
        }

        case "REMOVE_ITEM_FROM_CART_AT_INDEX": {

            return {

                ...state,
                cart:[...state.cart.slice(0, action.index), ...state.cart.slice(action.index + 1)]

            }
        }
     
        case "UPDATE_FORM" : {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    [action.form]:{
                        ...state.forms[action.form],
                        [action.field]:action.value
                    }
                }
            }

        }
     
        case "LOAD_STATE": {
            return {
                ...state,
                ...action.state,
            }
        }

        case "UPDATE_PLACE_ORDER_STATUS": {

            return {
                ...state,
                orderStatus:action.status

            }
        }

        case "CYCLE_CART": {


            return {
                ...state,
                cart:[],
                forms:{
                    deliveryDetails:{

                    }
                },
                completionDetails:{
                    ...state.completionDetails,
                    cart:state.cart,
                    forms:state.forms
                }
            }
        }

     
        default: {

            return state;

        }
            

    }

    
}