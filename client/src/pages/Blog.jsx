import React from "react";
import "../styles/Pages.css";

const Blog = ({ onBack }) => {
    return (
        <div className="blog-container">
            <h1>Blog</h1>

            <h2>2024-08-14</h2>
            <p>
                So this website is finally <i>sort of</i> usable. Here are some
                things on my to-do list:
            </p>
            <ul>
                <li>
                    Mobile-friendlying - This site sucks on mobile right now.
                    Scaling is hard :(
                </li>
                <li>
                    Computer Agent - Wouldn't you like to play against an
                    unbeatable computer agent? In the meantime, you can play
                    against Mark's quite beatable computer agent(s)&nbsp;
                    <a
                        href="https://git.betalupi.com/Mark/minimax"
                        target="_blank"
                    >
                        here
                    </a>
                    .
                </li>
                <li>
                    Customization - Settings page is currently empty. Maybe this
                    would be a place to control number of spaces and customize
                    the available symbols. Additional symbols such as
                    parentheses, caret (for exponentiation), and decimal point
                    may make the game more interesting.
                </li>
                <li>
                    Game Theory - This ties in with the computer agent. Is there
                    an optimal strategy? If not, what are some{" "}
                    <i>really good</i> strategies? You could probably write a
                    paper on this...
                </li>
                <li>
                    Online Multiplayer - Quite the undertaking, but I dream of
                    creating something like{" "}
                    <a href="https://lichess.org" target="_blank">
                        lichess
                    </a>{" "}
                    but for Minimax.
                </li>
            </ul>
        </div>
    );
};

export default Blog;
