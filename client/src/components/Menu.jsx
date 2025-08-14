import React, { useState } from "react";
import "../styles/Menu.css";

const Menu = ({ onNavigate, currentPage }) => {
    // Add currentPage prop
    const [menuOpen, setMenuOpen] = useState(false);

    // Dynamic menu items based on current page
    const menuItems = [
        {
            label: currentPage === "game" ? "New Game" : "Resume Game",
            action: () => {
                if (currentPage === "game") {
                    // On game page: start new game (reload)
                    window.location.reload();
                } else {
                    // On other pages: go back to game (resume)
                    if (onNavigate) {
                        onNavigate("game");
                    }
                }
            },
        },
        {
            label: "Settings",
            action: () => {
                if (onNavigate) {
                    onNavigate("settings");
                }
            },
        },
        {
            label: "Rules",
            action: () => {
                if (onNavigate) {
                    onNavigate("rules");
                }
            },
        },
        {
            label: "Blog",
            action: () => {
                if (onNavigate) {
                    onNavigate("blog");
                }
            },
        },
        {
            label: "About",
            action: () => {
                if (onNavigate) {
                    onNavigate("about");
                }
            },
        },
    ];

    return (
        <>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
                <button
                    className="hamburger-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="hamburger-icon">
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </button>
            </div>
            {menuOpen && (
                <div className="dropdown">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className="dropdown-item"
                            onClick={() => {
                                item.action();
                                setMenuOpen(false);
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Menu;
