import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Auto Chef</h4>
                    <p>Turn your ingredients into delicious recipes</p>
                </div>
                
                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="https://github.com/blip9" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/tushar-adhikari-b5281026b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Auto Chef. All rights reserved.</p>
            </div>
        </footer>
    );
}