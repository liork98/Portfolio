import React from "react";
import AboutMe from "./AboutMe"; // Import AboutMe component
import ProjectCard from "./ProjectCard"; // Import ProjectCard component
import Contact from "./Contact"; // Import Contact component
import "../styles/GlobalStyles.css";
import "./Portfolio.css";

const projects = [
    {
        title: "Queens Match",
        image: "/assets/projects%20screenshots/QueensMatch.png",
        description: "A community-driven mentorship application designed to connect mentors and mentees in the tech community. The app empowers individuals to foster meaningful connections, share knowledge, and grow together in programming and tech-related fields.",
        link: "https://github.com/liork98/queens-match"
    },
    {
        title: "Talkability",
        image: "/assets/projects%20screenshots/Talkability.png",
        description: "Developed an AI-powered application that assists elderly individuals and people with disabilities by transforming speech into actionable written customer service requests. Created and trained two BERT-based AI models to classify the appropriate request department and urgency level.",
        link: "https://github.com/liork98/talkability"
    },
    {
        title: "Flappy Bird",
        image: "/assets/projects%20screenshots/FlappyBird.png",
        description: "A fun, interactive remake of the classic Flappy Bird game, built using C# and Unity. This project demonstrates my skills in game physics, animation, and interactive gameplay mechanics.",
        link: "https://github.com/liork98/flappybird"
    },
    {
        title: "Theory App 🚗",
        image: "/assets/projects%20screenshots/theoryapp.png",
        description: "An intuitive iOS application built with Swift, SwiftUI, and Combine, designed to help users prepare for their driving theory test.",
        link: ""
    },
    {
        title: "Tic Tac Toe",
        image: "/assets/projects%20screenshots/TicTacToe.png",
        description: "A modern Tic Tac Toe game built with React.js, featuring a clean UI and interactive gameplay. This project utilizes React state management and component-based architecture to provide an intuitive experience for users.",
        link: "https://github.com/liork98/Tic-Tac-Toe-React-Course"
    }
    ,
    {
        title: "Fruit Ninja",
        image: "/assets/Background.png",
        description: "Developed a Fruit Ninja game in C# using Unity alongside a fellow student. We implemented dynamic slicing mechanics, physics-based fruit interactions, and an engaging UI to create a fast-paced, arcade-style experience.",
        link: "https://github.com/liork98/FruitNinja"
    }
];

const Portfolio = () => {
    return (
        <>
            {/*<WaveBackground />*/}
            <div className="portfolio-container">

                {/* About Me Section */}
                <AboutMe />

                {/* Projects Section */}
                <div className="section">
                    <p className="title-projects">Projects</p>
                    <ul className="project-list">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                link={project.link}
                            />
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <Contact />
            </div>
        </>
    );
};

export default Portfolio;
