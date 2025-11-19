import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Contact() {
    const [formData, setFormData] = useState({
        sender_email: '',
        senderName: '',
        message: '',
    });
    const { t } = useTranslation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        try {
            const response = await emailjs.send(serviceID, templateID, formData, userID);
            console.info('Email sent successfully!',response.status, response.text);
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formRecipientName">
                <Form.Control
                    type="text"
                    name="senderName"
                    placeholder={t('homePage.placeholder.p1')}
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRecipientEmail">
                <Form.Control
                    type="email"
                    name="sender_email"
                    placeholder={t('homePage.placeholder.p2')}
                    value={formData.sender_email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                    as="textarea"
                    name="message"
                    placeholder={t('homePage.placeholder.p3')}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit"
                style={{
                    background: "linear-gradient(to right, #a855f7, #6d28d9)",
                    border: "none",
                    padding: "10px 25px",
                    fontWeight: "500",
                    borderRadius: "30px",
                    boxShadow: "0 0 15px rgba(168,85,247,0.5)",
                    transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(168,85,247,0.8)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(168,85,247,0.5)";
                }}
            >
                {t('messages.submit')} &nbsp;&nbsp;
                <FiSend />
            </Button>
        </Form>
    )
}
export default Contact;