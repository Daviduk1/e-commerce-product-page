import React, {useState} from "react";
import { productData } from "./ProductShowCase";
import PlusIcon from '../asset/ecommerce-product-page-main/images/icon-plus.svg'
import MinusIcon from '../asset/ecommerce-product-page-main/images/icon-minus.svg'
// import CartIcon from '../assets/ecommerce-product-page-main/images/icon-cart.svg'
import cartIcon from '../asset/ecommerce-product-page-main/images/icon-cart.svg'



const ProductDetail = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="product-details">
            <h4>{productData.company}</h4>
            <h1>{productData.productName}</h1>
            <p>{productData.description}</p>
            <div className="current-price">
                {/* <h2>${productData.price.toFixed(2)}</h2> */}
                <span>{productData.originalPrice}</span>
            </div>
            <div className="action-bar">
                <div className="counter">
                    <button onClick={() => setCounter(counter - 1)}>
                        <img src={MinusIcon} alt="" />
                    </button>
                    <span>{counter}</span>
                    <button onClick={() => setCounter(counter + 1)}>
                        <img src={PlusIcon} alt="" />
                    </button>
                </div>
                <button id="add">
                    <img src={cartIcon} alt="" />
                    <span>Add to cart</span>
                </button>

            </div>
        </div>
    )
}

export default ProductDetail