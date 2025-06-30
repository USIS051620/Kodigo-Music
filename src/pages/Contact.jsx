import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación de envío
        console.log('Formulario enviado:', { name, email, message });
        setSubmitted(true);
        // Limpiar el formulario después de un tiempo
        setTimeout(() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
        }, 3000);
    };

    return (
        <div className="contact-container">
        <h1>Contacto</h1>
        <p>¿Tienes alguna pregunta? Rellena el formulario.</p>

        {submitted ? (
            <div className="success-message">
            ¡Gracias! Tu mensaje ha sido enviado.
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
        )}
        </div>
    );
};

export default Contact;