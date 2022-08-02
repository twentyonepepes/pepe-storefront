import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { connect } from 'react-redux';

import { ItemCard } from "../../components/ItemCard";
import { Navigation } from '../../components/Navigation';
import { mapStateToProps, mapDispatchToProps} from './mstp';

import "./browse.css";
import { sample, sampleSize } from "lodash";

export const OrderRoute = connect(
    mapStateToProps,
    mapDispatchToProps
)(({

    getInventory,
    handleClickItem,
    history = useHistory(),
    location = useLocation(),
    params = useParams()

})=>{

    const inventory = sampleSize(getInventory(params), 8) ;

    return (
    
        <div>
    
            <div className="browse-navigation-container">
                <Navigation/>
            </div>

            <div className="products-container">
    
                {inventory.map(item => (
                    <div key={item.productId}>
    
                        <div onClick={()=>handleClickItem(item.highlightedVariation || item, history, location)}> 

                            <ItemCard item={item.highlightedVariation || item}/>
                        
                        </div>
                        
    
                    </div>
                ))}
    
            </div>
            
        </div>
    )
})