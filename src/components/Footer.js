import React from 'react';
import './Footer.css'

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
                            <li>Github</li>
                            <li>LinkedIn</li>
                            <li>Website</li>
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