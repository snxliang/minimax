import React from "react";
import "../styles/Pages.css";

const About = ({ onBack }) => {
    return (
        <div className="about-container">
            <h1>About</h1>

            <p>
                This is a game I invented for my students at UCLA Math Circle
                back in 2024 (then known as <i>Symbol Strike</i>). The game
                turned out to be more interesting than I expected, so here it is
                in website form!
            </p>
            <p>
                This is still very much a work in progress, check the blog for
                development updates.
            </p>
            <br />
            <br />
            <br />
            <br />
            <p>
                My email is open to questions, suggestions, interesting
                strategies, or just to say hi!
            </p>
            <span className="email-hover">
                <span
                    className="email-protection"
                    data-user="&#115;&#108;&#105;&#97;&#110;&#103;&#115;&#117;&#110;&#110;&#121;"
                    data-domain="@gmail.com"
                ></span>
                <span className="hover-text">
                    you have to enter this manually
                </span>
            </span>

            <p>
                <a href="https://github.com/snxliang/minimax" target="_blank">
                    Git repo.
                </a>
            </p>

            <p>
                <a href="https://snxliang.github.io" target="_blank">
                    My personal site.
                </a>
            </p>
        </div>
    );
};

export default About;
