

import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product">
                    <h2>{product.name}</h2>
                    <p>Precio: ${product.price}</p>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;

