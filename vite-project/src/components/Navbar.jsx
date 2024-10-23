import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      
      <img src="/logo.png" alt="Amore Mio" style={{ height: '50px' }} />
    
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/shop">Tienda</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
