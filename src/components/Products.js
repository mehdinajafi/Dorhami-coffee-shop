import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../styles/Products.css';

const Products = () => {
    // useParams get link that has category 
    let { category } = useParams();
    // products array keep products as object 
    // this array set in useEffect that get data with axios from:
    // https://my-json-server.typicode.com/MehdiNjfi/coffee-shop-json-file/products
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/MehdiNjfi/coffee-shop-json-file/products')
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    // Filtered Products is products that user click on it and want to see them
    // Filtered Products filtered by "category" on line 8
    let filteredProducts = products.filter(product => product.category === category)

    return (
        <section id="products">
            <h1 className="products-title">محصولات</h1>
            {
            // Start show Filtered Products if user click on special category
            category !== "all" ? filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.name} className="product-card-img"/>
                        <div className="product-card-overlay">
                            <h1 className="product-card-overlay-heading">
                                {product.name}
                            </h1>
                            <p className="product-card-overlay-paragraph">
                                {product.price} تومان
                            </p>
                        </div>
                    </div>
                ))
            // End show Filtered Products

            // Start show all products if user want to see all product
                : products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.name} className="product-card-img"/>
                        <div className="product-card-overlay">
                            <h1 className="product-card-overlay-heading">
                                {product.name}
                            </h1>
                            <p className="product-card-overlay-paragraph">
                                {product.price} تومان
                            </p>
                        </div>
                    </div>
                ))
            // End show all products
            }
        </section>
    )
}

export default Products;