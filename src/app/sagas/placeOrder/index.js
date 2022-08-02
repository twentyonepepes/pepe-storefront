import { takeEvery, put, select } from 'redux-saga/effects';
import delay from 'delay';
import axios from 'axios';
export function* placeOrder(){

    yield takeEvery("PLACE_ORDER", function*({history}){

        console.info("Posting order to...",process.env.ORDER_FULFILLMENT_URL, process.env);
        const state = yield select();
        yield put({type:"UPDATE_PLACE_ORDER_STATUS", status:"PLACING_ORDER"});
        let r = yield axios.post(process.env.ORDER_FULFILLMENT_URL + "/order", {cart: state.cart, deliveryDetails: state.forms.deliveryDetails});
        yield delay(1200);
        yield put({type:"UPDATE_PLACE_ORDER_STATUS", status:"ORDER_COMPLETED"});
        yield put({type:"CYCLE_CART"});
        console.info("Order placed...", r);
        history.push("/thankyou")

    })

}