export const defaultState = {

    inventory: [],
    cart: [

    ],
    completionDetails:{
        cart:[

        ]
    },
    pageseq:[],
    forms:{
        deliveryDetails:process.env.NODE_ENV === "development" ? {
            name:"Homer",
            address:"123 Fake Street",
            email1:"daniel@herald.to"
        } : {
            name:"",
            address:"",
            email1:""
        }
    },
    orderStatus:"NOT_BEING_PLACED",
 
}