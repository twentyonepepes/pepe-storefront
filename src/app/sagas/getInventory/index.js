import axios from 'axios';
import { put } from 'redux-saga/effects';

import { PRODUCT_SERVER_URL } from '../../config';
import { generateSpecInventory, populateVariations } from '../../spec/generateTestInventory';

export const getInventory = function*(){

    let useDummy = false;

    if (!useDummy) {

        if (PRODUCT_SERVER_URL === undefined) {

            useDummy = true;
            
        }
    
        if (PRODUCT_SERVER_URL !== undefined) {
    
            try {
    
                let { data } =  yield axios.get("/productx/" + "/products");

                let ezInv = data.map(i => ({
                    ...i,
                    productId: i.SKU,
                    variations:{
                        colors:[],
                        sizes:[]
                    }
                }));

                const populatedInv = populateVariations(ezInv);

                yield put({type: "SET_INVENTORY", inventory: populatedInv});
    
            } catch (e ) {
    
                console.error("Encountered an error obtaining products", e);
                useDummy = true;
    
            }
    
        }


    }

    if (useDummy) {

        const inventory = generateSpecInventory();

        console.warn("Using dummy inventory..", inventory);

        yield put({type: "SET_INVENTORY", debug: true, inventory });

    }

}