import React, { useState } from "react";
import Menu from "./components/Menu";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import Settings from "./pages/Settings";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./styles/App.css";

const App = () => {
    const [currentPage, setCurrentPage] = useState("game");

    return (
        <div className="app">
            {/* Pass currentPage to Menu so it knows which page we're on */}
            <Menu onNavigate={setCurrentPage} currentPage={currentPage} />

            {/* Always render Game, but conditionally hide it */}
            <div style={{ display: currentPage === "game" ? "block" : "none" }}>
                <Game />
            </div>

            {/* Only render Rules when needed */}
            {currentPage === "rules" && (
                <Rules onBack={() => setCurrentPage("game")} />
            )}

            {/* Add other pages here as needed */}
            {currentPage === "settings" && (
                <Settings onBack={() => setCurrentPage("game")} />
            )}

            {currentPage === "blog" && (
                <Blog onBack={() => setCurrentPage("game")} />
            )}

            {currentPage === "about" && (
                <About onBack={() => setCurrentPage("game")} />
            )}
        </div>
    );
};

export default App;
