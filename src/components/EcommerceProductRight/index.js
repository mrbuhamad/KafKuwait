import React,{Component} from 'react';

import Product1 from '../../images/products/1.jpg';
import Product2 from '../../images/products/2.jpg';
import Product3 from '../../images/products/3.jpg';
import Product4 from '../../images/products/4.jpg';

import './style.scss';

const Products = [
        { src: Product1, alt: 'product image', prodcut_title: 'Product title' },
        { src: Product2, alt: 'product image', prodcut_title: 'Product title' },
        { src: Product3, alt: 'product image', prodcut_title: 'Product title' },
        { src: Product4, alt: 'product image', prodcut_title: 'Product title' },
    ];

export class EcommerceProductRight extends Component{
    render() {
        return(
            <div className="ecmRight">
                {Products.map((product, index) => {
                    return (
                        <div className="productSingle" key={index}>
                            <img src={product.src} alt={product.alt}/>
                            <div className="productTitle">{product.prodcut_title}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default EcommerceProductRight;