import React from "react";

import { connect } from 'react-redux';
import { IMAGE_SERVER_URL } from '../../config';
import { removeTextStyling } from "../../config/colors/findColor";
// import { products } from '../../spec';

import './product-image.css';

export const ProductImage = connect(state => ({inventory: state.inventory}))(({productId, inventory}) => {

    const productDetails =  inventory.find(product => product.productId === productId);
    // let imageURL = `url(${IMAGE_SERVER_URL}/generate/${productDetails.apparelType}/${removeTextStyling(productDetails.color)}/${productDetails.logoType}?format=JPEG)`;
    let imageURL = `url(/imagex/generate/${productDetails.apparelType}/${removeTextStyling(productDetails.color)}/${productDetails.logoType}?format=JPEG)`;

    const style = {  
        backgroundImage: imageURL,
        // backgroundColor: IMAGE_SERVER_URL ? `rgba(255,255,255,0.8)` : `magenta`,
        backgroundColor: "white"
    };

    return (

        <div>

            <div title={productDetails.name}  className="product-image" style={style}></div>

        </div>

    )
});