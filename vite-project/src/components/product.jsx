import react from 'react';

function Product({ name, price, description, image }) {
    return (
        
        <div className="product">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>precio: ${price}</p>
            <button>Añadir al carrito</button>
        </div>


    );
}

export default Product;
