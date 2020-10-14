import React from 'react';
import ProductImage1 from "../../images/products/5.jpg";
import ProductImage2 from "../../images/products/6.jpg";
import ProductImage3 from "../../images/products/7.jpg";
import ProductImage4 from "../../images/products/8.jpg";

import './style.scss';

const TravelPosts =() => {
    return(
        <div className="travelPost">
            <div className="tpItem">
                <div className="tpImg">
                    <img src={ProductImage1} alt=""/>
                </div>
            </div>
            <div className="tpItem">
                <div className="tpImg">
                    <img src={ProductImage2} alt=""/>
                </div>
            </div>
            <div className="tpItem">
                <div className="tpImg">
                    <img src={ProductImage3} alt=""/>
                </div>
            </div>
            <div className="tpItem">
                <div className="tpImg">
                    <img src={ProductImage4} alt=""/>
                </div>
            </div>
        </div>
    )
};

export default TravelPosts;