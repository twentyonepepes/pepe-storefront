import React from "react";

import classnames from 'classnames';
import { connect } from 'react-redux';
import { useParams, useLocation, Link } from "react-router-dom";

import colors from '../../config/colors/colors.json';
import { NotFound } from "../../components/NotFound";
import { ProductImage } from "../../components/ProductImage";
// import { products } from '../../spec';

import './detail.css';
import { DetailColorSelect } from "./DetailColorSelect";
import { ItemDetailText } from "../../components/ItemDetailText";

const mstp = (state)=>({

    getProductDetails(){

        const { productId } = useParams();
        const productDetails =  state.inventory.find(product => product.productId === productId);

        if (!productDetails) {
          
            console.warn(`Can't find product details for the following productId:: ${productId}`);

        }

        return { 
            ... productDetails,
            colorVariations: productDetails ? productDetails.variations.colors : [],
            sizeVariations: productDetails ? productDetails.variations.sizes : []
        };

    },
    getCompleted(location){

        const nonseq = new URLSearchParams(location.search).get('nonseq');
        return (state.pageseq.find(p => p.nonseq === nonseq));

    }
});
const mdtp = (dispatch)=>({

    handleAddToCart(productDetails, nonseq){

        dispatch({type:"ADD_ITEM_TO_CART", product:productDetails, nonseq})
    }

})
export const DetailRoute = connect(mstp, mdtp)(({

    getProductDetails,
    getCompleted,
    handleAddToCart,
    location = useLocation()

})=>{

    const productDetails = getProductDetails();
    const nonseq = new URLSearchParams(location.search).get('nonseq');

    if (!productDetails || !productDetails.productId) {

        return NotFound();
    }

    return (

        <div className="details-container">

            <div className="product-hero-image-container">

                <ProductImage productId={productDetails.productId} />

            </div>

            <div className="product-description-container">

                <ItemDetailText productId={productDetails.productId}/>
               
                {(()=>{

                    const sizes = productDetails.sizeVariations;
                    

                    return (
                        <div className="size-select">

                        {Object.keys(sizes).map(variation => (
    
                            <div key={sizes[variation].productId} className={classnames(["size-select-option-container",{selected:productDetails.size === variation}])}>
    
                                <Link to={`/detail/${sizes[variation].productId}?nonseq=${new Date().getTime()}`}>
    
                                    <div>

                                        {sizes[variation].size}
    
    
    
                                        {/* <div className="color-select-option--color-thumbnail" style={{"backgroundColor":colorMap[variation]}} /> */}
    
                                    </div>
    
                                </Link>
    
                            </div>
    
                        ))}
    
                    </div>
                    )

                })()}
                {/* {console.log("Product details?", productDetails)} */}
                <DetailColorSelect colors={productDetails.colorVariations}/>

               

                <div>

                    {productDetails.description || ""}
                    
                </div> 


            </div>

            <div className="product-checkout-container">
                <div className="product-checkout--price">
                    ${productDetails.priceUSD}
                </div>
                <div className="product=checkout--cta">
                    This item is reserved for you for a limited time. Add it to your cart to avoid missing out!
                </div>

                {getCompleted(location) ? 
                <div>

                    
                    <button disabled className="product-checkout--button">Added to cart</button> 
                    <Link to="/checkout">
                        <button className="product-checkout--button">Go to checkout</button> 
                    </Link>
                    <Link to="/browse">

                        <button className="product-checkout--button">Browse more items</button> 

                    </Link>
                    
                    

                </div>
                : 
                <button onClick={()=>handleAddToCart(productDetails, nonseq)} className="product-checkout--button">
                    Add to Cart
                </button>}

                
            </div>

        </div>
    )
});