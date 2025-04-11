import React from 'react';

export default function Intro() {
    return (
        <div className="intro-section">
            <div className="intro-content">
                <h2>Welcome to Auto Chef</h2>
                <p>Transform your available ingredients into delicious recipes using our AI-powered kitchen assistant.</p>
                <div className="intro-features">
                    <div className="feature">
                        <span>🧪</span>
                        <p>Add Ingredients</p>
                    </div>
                    <div className="feature">
                        <span>🤖</span>
                        <p>AI Magic</p>
                    </div>
                    <div className="feature">
                        <span>🍳</span>
                        <p>Get Recipe</p>
                    </div>
                </div>
            </div>
        </div>
    );
}