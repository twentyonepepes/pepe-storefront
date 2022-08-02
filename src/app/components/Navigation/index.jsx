import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

export const Navigation = ()=>(

    <div className="navigation">
        <div>
            <Link to="/browse">

                <h4>All Apparel</h4>

            </Link>
            
            <ul>
                <Link to="/browse/tshirts">
                <li>
                    T-Shirts
                </li>
                </Link>
                
                <Link to="/browse/sweaters">
                <li>
                    Sweaters
                </li>
                </Link>

                <Link to="/browse/towels">
                <li>
                    Towels (New!)
                </li>
                </Link>
                
            </ul>
        </div>
    </div>
)