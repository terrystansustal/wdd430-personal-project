import React from 'react'
import './related-products.css'
import data_product from '../assests/data'
import Item from '../item/item'

const RelatedProducts = (props) => {

    return (
        <div className='related-products'>
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-item">
                {data_product.map((item,i)=> {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts