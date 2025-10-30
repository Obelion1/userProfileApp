import { useState } from 'react'

function Contact(){
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(event){
        const { name, value } = event.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(event){
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-page">
            <div className="contact-card">
                <h2 className="contact-title">Kontakt</h2>
                {submitted ? (
                    <div className="contact-success">Danke! Wir melden uns bald.</div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <label className="contact-label" htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="contact-input"
                            placeholder="Ihr Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label className="contact-label" htmlFor="email">E‑Mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="contact-input"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label className="contact-label" htmlFor="message">Nachricht</label>
                        <textarea
                            id="message"
                            name="message"
                            className="contact-textarea"
                            placeholder="Wie können wir helfen?"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="contact-button">Senden</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Contact