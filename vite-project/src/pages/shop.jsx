import react from 'react';
import Product from '../components/product';
import './shop.css';

const products = [
    {
        name: 'Product 1',
        price: 10,
        description: 'Description 1',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Product 2',
        price: 20,
        description: 'Description 2',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Product 3',
        price: 30,
        description: 'Description 3',
        image: 'https://via.placeholder.com/150',
    },
];

function Shop() {

    return (
        <div className="shop">
            <h1>Tienda de velas</h1>
            <div className="products-list">
                {products.map((producto, index) => (
                    <Product key={index} {...producto} />
                ))}
            </div>
        </div>
    );
    
}

export default Shop;