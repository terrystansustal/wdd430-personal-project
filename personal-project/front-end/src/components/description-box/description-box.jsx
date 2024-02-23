import React from 'react'
import './description-box.css'

const DescriptionBox = () => {

    return (
        <div className='description-box'>
            <div className="description-box-navigator">
                <div className="description-box-nav-box">Description</div>
                <div className="description-box-nav-box fade">Reviews (122)</div>
            </div>
            <div className="description-box-description">
                <p>An e-commerce website is an online platform that facilitates buying and selling pf products or services
                    over the internet that serves as a virtual marketplace where businesses and individuals showcase
                    their products, interact with customers, and conduct transactions without the need for a physical presence.
                    E-commerce websites have gained immense popularity due to their convenience accessibility, and the global reach they offer.
                </p>
                <p> E-commerce websites typically display products or services along with detailed descriptions, images, prices, amd any available variations (e.g. sizes, colors). Each product
                    usually has it's own dedicated page with relevant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox