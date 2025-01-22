import React from "react";
import WaveBackground from "./WaveBackground";
import "../styles/PortfolioStyles.css";

const Portfolio = () => {
    return (
        <>
            <WaveBackground />
            <div className="portfolio-container">
                <h1 className="my-name">Lior Kashi</h1>
                <p className="bio">
                    I am a passionate developer with a strong foundation in Computer Science. <br/>
                    I love turning ideas into real impactful products using code.
                    My goal is to make a difference through technology—building solutions that truly help people and
                    create value.
                </p>


                {/* Projects Section */}
                <div className="section">
                    <h3 className="title-projects">Projects</h3>
                    <ul>
                        <li className="project-item">
                            <p className="project-title">Queens Match</p>
                            <img src="/assets/projects%20screenshots/Queens%20Match/screenshot1.png"
                                 alt="Queens Match Project" className="project-image"/>
                            <p className="project-describe">
                                A community-driven mentorship application designed to connect mentors and mentees in the
                                tech community. The app empowers individuals to foster meaningful connections, share
                                knowledge, and grow together in programming and tech-related fields.
                            </p>
                        </li>
                        <li className="project-item">
                            <p className="project-title">Talkability</p>
                            <img src="/assets/projects%20screenshots/talkability/screenshot2.png"
                                 alt="Talkability Project" className="project-image"/>
                            <p className="project-describe">
                                A customer service tool designed to empower elderly individuals and people with
                                disabilities. The platform enables users to communicate freely via speech, which is
                                transcribed into written requests for streamlined customer service interactions.
                            </p>
                        </li>
                        <li className="project-item">
                            <p className="project-title">Flappy Bird</p>
                            <img src="/assets/projects%20screenshots/FlappyBird.png"
                                 alt="Flappy Bird Project" className="project-image"/>
                            <p className="project-describe">
                                A fun, interactive remake of the classic Flappy Bird game, built using C# and Unity. This project demonstrates my skills in game physics, animation, and interactive gameplay mechanics.
                            </p>
                        </li>
                        <li className="project-item">
                            <p className="project-title">Tic Tac Toe</p>
                            <img src="/assets/projects%20screenshots/TicTacToe.png"
                                 alt="Tic Tac Toe Project" className="project-image"/>
                            <p className="project-describe">
                                A modern Tic Tac Toe game built with React.js, featuring a clean UI and interactive gameplay.
                                This project utilizes React state management and component-based architecture to provide
                                an intuitive experience for users.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="section contact-section">
                    <h3>Contact</h3>
                    <ul className="contact-list">
                        <li><strong>📧 Email:</strong> <a href="mailto:liorkashi@gmail.com">liorkashi@gmail.com</a></li>
                        <li><strong>📞 Phone:</strong> <a href="tel:+972524641985">052-4641985</a></li>
                        <li><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/liorkashi/" target="_blank" rel="noopener noreferrer">linkedin.com/in/liorkashi</a></li>
                        <li><strong>🐙 GitHub:</strong> <a href="https://github.com/liork98" target="_blank" rel="noopener noreferrer">github.com/liork98</a></li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Portfolio;
