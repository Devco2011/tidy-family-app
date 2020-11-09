import React from 'react';
import GitHub from '../components/images/GitHub.png'
import LILogo from '../components/images/LILogo.png'
import dcPortfolio from '../components/images/dcPortfolio.png'
import './Footer.css';

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h6>Tidy Family</h6>
                        <ul className="list-unstyled">
                            <li>Design and Build by Devon Cox</li>
                            <li>Front-end Capstone</li>
                            <li>Nashville Software School</li>
                        </ul>

                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h6>Technology</h6>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h6>Connect</h6>
                            <li><a href="https://github.com/Devco2011"><img width="15%" src={GitHub} alt=" GitHub" /></a></li>
                            <li><a href="www.linkedin.com/in/devonhcox"><img width="18%" src={LILogo} alt=" LinkedIn" /></a></li>
                            <li><a href=""><img width="20%" src={dcPortfolio} alt=" Devon Cox Portfolio" /></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Devon Cox | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>

        </div>
    )
}