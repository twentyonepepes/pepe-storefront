export const subtotal = state => {

    const subtotal = state.cart.map(item => +item.priceUSD).reduce((a,b)=>a + b, 0);
    const tax = subtotal * 0.15;
    const shipping = 15;

    return {
        subtotal,
        tax,
        shipping
    }

    
}