import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import Card from '../components/Card'; 

const Home = () => {
    const cardsData = [
        {
            title: "Card 1",
            description: "Description 1",
            image: "/public/foto1.jpg", 
        },
        {
            title: "Card 2",
            description: "Description 2",
            image: "/public/IMG-20241013-WA0042.jpg",
        },
        {
            title: "Card 3",
            description: "Description 3",
            image: "/public/card2.jpg",
        },
    ];

    const phoneNumber = "+1234567890"; 

    return (
        <div className="home">
            <h1>Bienvenidos</h1>
            <p>
                Descubre un mundo de fragancias y calidez con nuestras velas artesanales. Cada vela está diseñada para transformar tu hogar en un refugio de serenidad y belleza.
            </p>

            <h2>Únete a Nuestra Comunidad</h2>
            <p>
                Suscríbete a nuestro boletín para recibir novedades sobre nuevos productos, ofertas exclusivas y consejos sobre cómo disfrutar al máximo de tus velas.
            </p>

            <p>
                ¡Explora nuestra colección y encuentra la vela perfecta para ti!
            </p>

            <h2>Nuestras Velas</h2>
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                    />
                ))}
            </div>

            <h2>Conéctate con Nosotros</h2>
            <div className="contact-info">
                <p>Síguenos en nuestras redes sociales:</p>
                <p>
                    <a href="https://www.instagram.com/amoremiovela/?igsh=MXV2Z24zY2F2bHRsaQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <FaInstagram /> Instagram
                    </a> | 
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF /> amoremio
                    </a>
                </p>
                <p>
                
                    
                </p>
            </div>
        </div>
    );
};

export default Home;
