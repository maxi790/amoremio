import React from 'react';


const products = [
    {
        name: 'Product 1',
        price: 20,
        description: 'Description 1',
        image: '/public/foto1.jpg',
    },
    {
        name: 'Product 2',
        price: 20,
        description: 'Description 2',
        image: '/public/foto2.jpg',
    },
    {
        name: 'Product 3',
        price: 30,
        description: 'Description 3',
        image: '/public/foto3.jpg',
    },
    {
        name: 'Product 4',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0041.jpg',
    },
    {
        name: 'Product 5',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0042.jpg',
    },{
        name: 'Product 6',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0043.jpg',
    },{
        name: 'Product 7',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0044.jpg',
    },{
        name: 'Product 8',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0045.jpg',
    },{
        name: 'Product 9',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0046.jpg',
    },{
        name: 'Product 10',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0047.jpg',
    },{
        name: 'Product 11',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0048.jpg',
    },{
        name: 'Product 12',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0049.jpg',
    },
    {
        name: 'Product 13',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0050.jpg',
    },{
        name: 'Product 14',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0051.jpg',
    },{
        name: 'Product 15',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0052.jpg',
    },{
        name: 'Product 16',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0053.jpg',
    },{
        name: 'Product 17',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0054.jpg',
    },{
        name: 'Product 18',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0055.jpg',
    },{
        name: 'Product 19',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0056.jpg',
    },{
        name: 'Product 20',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0057.jpg',
    },{
        name: 'Product 21',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0058.jpg',
    },{
        name: 'Product 22',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0059.jpg',
    },{
        name: 'Product 23',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0060.jpg',
    },{
        name: 'Product 24',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0061.jpg',
    },{
        name: 'Product 25',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0062.jpg',
    },{
        name: 'Product 26',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0063.jpg',
    },{
        name: 'Product 27',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0064.jpg',
    },{
        name: 'Product 28',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0065.jpg',
    },{
        name: 'Product 29',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0066.jpg',
    },{
        name: 'Product 30',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0067.jpg',
    },
        

];

function Shop({ addToCart }) {
    return (
        <div className="shop">
            <h1>Tienda de Velas</h1>
            <div className="products-list">
                {products.map((producto, index) => (
                    <div key={index} className="product">
                        <h2>{producto.name}</h2>
                        <img src={producto.image} alt={producto.name} />
                        <p>{producto.description}</p>
                        <p>Precio: ${producto.price}</p>
                        <button onClick={addToCart}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;