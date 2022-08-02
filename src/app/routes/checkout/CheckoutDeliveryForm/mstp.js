export const mstp = (state)=>({

    form:{...state.forms.deliveryDetails}

});

export const mdtp = (dispatch)=>({

    handleFormUpdate(field, value){

        dispatch({type:"UPDATE_FORM", form:"deliveryDetails", field, value})

    }
})