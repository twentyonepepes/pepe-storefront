import React from "react";
import { connect } from 'react-redux';

const mstp = (state, ownProps)=>({

    productDetails: state.inventory.find(product => product.productId === ownProps.productId)

});

export const ItemDetailText = connect(mstp)(({

    productDetails

})=>(

    <div>

        <h2>

            {productDetails.longName || productDetails.name}
        </h2>
            
        <div className="price-container">
        
            <h3>

                Price: USD$ {productDetails.priceUSD}

            </h3>

            <h4>

                Size: {productDetails.size}, Color: {productDetails.color}

            </h4>

        </div>
        
    </div>
));