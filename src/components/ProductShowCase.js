import React, { useState } from "react";
import productOne from '../asset/ecommerce-product-page-main/images/image-product-1.jpg'
import productOneThumb from '../asset/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg'

import productTwo from '../asset/ecommerce-product-page-main/images/image-product-2.jpg'
import productTwoThumb from '../asset/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg'

import productThree from '../asset/ecommerce-product-page-main/images/image-product-3.jpg'
import productThreeThumb from '../asset/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg'

import productFour from '../asset/ecommerce-product-page-main/images/image-product-4.jpg'
import productFourThumb from '../asset/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg'

export const productData = {
    company: 'Sneaker Company',
    productName: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer',
    price: 125,
    discount: '50%',
    originalPrice: 250,
    images: [productOne, productTwo, productThree, productFour],
    thumbnails: [productOneThumb, productTwoThumb, productThreeThumb, productFourThumb]
}

const ProductShowCase = () => {
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <div className="product-showcase">
            <figure>
                <img src={productData.images[imageIndex]} alt="" />
            </figure>
            <div className="thumbnails">
                {
                    productData.thumbnails.map((thumb, index) => {
                        return (
                            <div className="thumb" key={index} onClick={() => setImageIndex(index)}>
                                <img src={thumb} alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProductShowCase