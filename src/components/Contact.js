import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <div className="section contact-section">
            <p className="contact-title">Contact :</p>
            <ul className="contact-list">
                <li><strong>📧 Email:</strong> <a href="mailto:liorkashi@gmail.com">liorkashi@gmail.com</a></li>
                <li><strong>📞 Phone:</strong> <a href="tel:+972524641985">052-4641985</a></li>
                <li><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/liorkashi/" target="_blank" rel="noopener noreferrer">linkedin.com/in/liorkashi</a></li>
                <li><strong>🐙 GitHub:</strong> <a href="https://github.com/liork98" target="_blank" rel="noopener noreferrer">github.com/liork98</a></li>
            </ul>
        </div>
    );
};

export default Contact;
