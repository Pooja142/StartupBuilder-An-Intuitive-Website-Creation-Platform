import React from 'react'
import './style.css';

function Products(props) {
  return (
    <div className='productContainer'>
        {
            props.products.map(product => (
                <div  key={product.id} className='product'>
            <h3 className='name'>{product.name}</h3>
            <p className='desc'>{product.description}</p>
            <h5 className='price'>
<br/>$21M    &emsp;   Valuation price
<br/>$2.06   &emsp;   Price per Share
<br/>$249.26 &emsp;  Min. Investment
<br/><br/>${product.price}</h5>
            <button onClick={()=>props.buyNow(product.id)}className='button4'>Invest Now</button>

        </div> ))
        }
        
    </div>
  )
}

export default Products