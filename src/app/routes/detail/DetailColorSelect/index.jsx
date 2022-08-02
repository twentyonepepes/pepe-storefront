import React from "react";
import { Link } from "react-router-dom";

import colorMap from '../../../config/colors/colors.json';
import { findColor } from "../../../config/colors/findColor";

export const DetailColorSelect = ({colors}) => (

    
    <div className="color-select">

        
        
        {/* {Object.keys(colors).map(variation => ( */}
        {colors.map(variation => (

            <div key={variation.productId} className="color-select-option">
                {console.info("Detail", variation, colors, colorMap[variation])}

                <Link to={`/detail/${variation.productId}?nonseq=${new Date().getTime()}`}>

                    <div>

                        <div className="color-select-option--color-thumbnail" style={{"backgroundColor":findColor(variation.color)}} />

                    </div>

                </Link>

            </div>

        ))}
    
    </div>

)