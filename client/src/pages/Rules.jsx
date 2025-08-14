import React from "react";

const Rules = ({ onBack }) => {
    return (
        <div className="rules-container">
            <h1>How to play Minimax</h1>

            <section>
                <h2>Objective</h2>
                <p>
                    Create mathematical expressions using the available symbols
                    to maximize your score while minimizing your opponent's
                    score.
                </p>
            </section>

            <section>
                <h2>How to Play</h2>
                <ul>
                    <li>
                        In the first round, each player places a symbol on their
                        own row to try and maximize their expression
                    </li>
                    <li>
                        In the next round, the players place a symbol on their
                        oponents row to try to minimize it
                    </li>
                    <li>
                        Use numbers 0-9 and operators + - * / to build
                        expressions
                    </li>
                    <li>Each symbol can only be used once per row</li>
                    <li>Each move must allow the final expression to parse.</li>
                    <li>Leading zeroes are allowed, hence, e.g. 05 = 5</li>
                    <li>
                        + and - can be used as unary operators, e.g. 1 + - 2 = 1
                        - + 2 = -1
                    </li>
                    <li>
                        divides by zero is signed infinity, e.g. 1 / 0 =
                        infinity, -1 / 0 = - infinity
                    </li>
                </ul>
            </section>

            <section>
                <h2>Winning</h2>
                <p>The player with the higher evaluated expression wins!</p>
            </section>

            <section>
                <h2>Tips</h2>
                <ul>
                    <li>
                        You can select the symbol using either mouse or
                        keyboard.
                    </li>
                    <li>
                        You can change the size of the board by clicking the
                        number next to the heading.
                    </li>
                </ul>
            </section>

            <button onClick={onBack} className="back-button">
                Back to Game
            </button>
        </div>
    );
};

export default Rules;
