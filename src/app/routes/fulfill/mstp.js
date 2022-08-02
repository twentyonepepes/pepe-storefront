import { subtotal } from '../../selectors/subtotal';

export const mstp = (state)=>{
    
    return ({
        ...state.completionDetails,
        ...subtotal(state.completionDetails)
    });
    
}