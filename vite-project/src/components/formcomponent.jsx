import React, { useState } from "react";

const FormComponent = () => {
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        
        // Enlace de WhatsApp
        const phoneNumber = "+543329604343"; // Reemplaza con tu número real
        const whatsappMessage = `Nombre: ${formdata.name}\nEmail: ${formdata.email}\nMensaje: ${formdata.message}`;
        const whatsappLink = `https://wa.me/${phoneNumber.replace(/[\s+]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappLink, '_blank');

        // Resetear el formulario
        setFormdata({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={formdata.name}
                            onChange={handleChange}
                            required 
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formdata.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Mensaje:
                        <textarea
                            name="message"
                            value={formdata.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
