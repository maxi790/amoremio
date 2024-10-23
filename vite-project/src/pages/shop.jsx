import React from 'react';


const products = [
    {
        name: 'Cilindro Recto',
        price: 1400,
        description: 'Vela de molde en cera de soja',
        image: '/public/foto1.jpg',
    },
    {
        name: 'Vaso de Vidrio',
        price: 2380,
        description: 'Vela de molde en cera de soja',
        image: '/public/foto2.jpg',
    },
    {
        name: 'Frasco mini ',
        price: 2635,
        description: 'Vela de molde en cera de soja',
        image: '/public/foto3.jpg',
    },
    {
        name: 'Bubble',
        price: 3360,
        description: 'Vela de molde en cera de soja',
        image: '/public/IMG-20241013-WA0041.jpg',
    },
    {
        name: 'Cactus Mediano',
        price: 1238,
        description: 'Vela de molde en cera de soja',
        image: '/public/IMG-20241013-WA0042.jpg',
    },{
        name:'Margarita chica',
        price: 1200,
        description: 'Vela de molde en cera de soja',
        image: '/public/IMG-20241013-WA0043.jpg',
    },{
        name: 'Mini Bubble',
        price: 30,
        description: 'Description 3',
        image: '/public/tienda5.jpg',
    },{
        name: 'Vela con perfume',
        price: 3000,
        description: 'Fragancia Coco y Vainilla',
        image: '/public/IMG-20241013-WA0045.jpg',
    },{
        name: 'Corona de Vidrio',
        price: 9500,
        description:'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0046.jpg',
    },{
        name: 'Letra Souvenirs',
        price: 8000,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0047.jpg',
    },{
        name: 'Cilindro Bubble',
        price: 3480,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0048.jpg',
    },{
        name: 'Product 12',
        price: 30,
        description: 'Description 3',
        image: '/public/IMG-20241013-WA0049.jpg',
    },
    {
        name: 'Margarita grande',
        price: 2300,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0050.jpg',
    },{
        name: 'Cilindro',
        price: 6000,
        description: 'Vela  en cera de soja',
        image: '/public/tienda4.jpg',
    },{
        name: 'Ovillo',
        price: 2000,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0052.jpg',
    },{
        name: 'Pino Navideño',
        price: 2807,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0053.jpg',
    },{
        name: 'Pino Grande',
        price: 2670,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0054.jpg',
    },{
        name: 'Conejitos',
        price: 2400,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0055.jpg',
    },{
        name: 'Bubble',
        price: 2500,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0056.jpg',
    },{
        name: 'Arcoiris Chico',
        price: 2200,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0057.jpg',
    },{
        name: 'Flotante Mini',
        price: 2635,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0058.jpg',
    },{
        name: 'Ramo',
        price: 14000,
        description: 'Vela  en cera de soja',
        image: '/public/tienda.jpg',
    },{
        name: 'Cactus Grande',
        price: 3000,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0060.jpg',
    },{
        name: 'Rosa Mediana',
        price: 2200,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0061.jpg',
    },{
        name: 'Candy',
        price: 7100,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0062.jpg',
    },{
        name: 'Osito',
        price: 5000,
        description: ' Vela  en cera de soja',
        image: '/public/tienda2.jpg',
    },{
        name: 'Suculenta',
        price: 2000,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0064.jpg',
    },{
        name: 'Cilindro',
        price: 1400,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0065.jpg',
    },{
        name: 'Cuenco Madera',
        price: 6500,
        description: 'Vela  en cera de soja',
        image: '/public/IMG-20241013-WA0066.jpg',
    },{
        name: 'Souvenirs',
        price: 10000,
        description: 'Vela  en cera de soja',
        image: '/public/tienda3.jpg',
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