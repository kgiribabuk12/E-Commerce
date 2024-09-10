import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitate
                buying and selling of procucts or services over the internet 
                serves as a virtual markplace where businesses and individuals
                showcase their products, interact with customers.
            </p>
            <p>
            An e-commerce website is an online platform that facilitate
                buying and selling of procucts or services over the internet 
                serves as a virtual markplace where businesses and individuals
                showcase their products, interact with customers.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox