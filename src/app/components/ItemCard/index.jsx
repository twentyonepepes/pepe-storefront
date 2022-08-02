import React from "react";

import { ProductImage } from "../ProductImage";
import './item-card.css';

export const ItemCard = ({item}) => {

    if (!item) {
        throw new Error("An undefined item was passed to item card.");
    }

    return (    
    
        <div className="product-card" key={item.productId || item.SKU}>
            <div className="product-card-upper-container">

                <h3 className="product-card-name">{item.shortName || item.name}</h3>
                

            </div>
            
            <div style={{height:250}} className="product-card-image-container">

                <ProductImage productId={item.productId}/>

            </div>
            
            <div className="product-card-details">

                <div className="product-card-price-container">
                    
                    <div className="product-card-price">

                    ${item.priceUSD}
                    </div>
                    
                </div>

                <div className="product-card-bottom-flair">
                {item.quantity <= 3 ? 
                    <span className="product-card-bottom-flair--text">Only {item.quantity} left!</span>
                    
                 : <span className="product-card-bottom-flair--text">VERY RARE</span>}

                </div>
                
            </div>  
        </div>

    )
}