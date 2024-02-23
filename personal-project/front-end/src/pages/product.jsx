import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/breadcrums/breadcrum'
import ProductDisplay from '../components/product-display/product-display'
import DescriptionBox from '../components/description-box/description-box'
import RelatedProducts from '../components/related-product/related-products'
import Footer from '../components/footer/footer'

const Product = () => {
    const {all_product}= useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))

    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts />
            <Footer />
        </div>
    )
}

export default Product