import React from 'react'
import './card.css'

export default function Card(props){
    const product = props
    return <div className='card-items'>
        <img src={product.image} alt="" width="200px" height="200px"/>
        <h2>Product Name: {product.title}</h2>
        <h4>Price: {product.price}</h4>
    </div>
}   