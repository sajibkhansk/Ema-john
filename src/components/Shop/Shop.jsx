import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart= (product) =>{
       const new_cart= [...cart, product];
       setCart(new_cart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Items:{cart.length} </p>
            </div>

        </div>
    );
};

export default Shop;