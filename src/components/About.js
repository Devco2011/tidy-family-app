import React from 'react';
import './about.css';

export const About = () => {
    return (
        <div className="about-main-content">
            <div className="about-container">
                <div className="row">
                    <div className="about col">
                        <h4 className="ml-4">What is Tidy Family?</h4>
                        <hr />
                        <h5><strong>It's an app that makes managing household chores fun for the whole family by:</strong></h5>
                        <ul className="list">
                            <li className="pb-3">Rewarding teamwork with a main family award</li>
                            <li className="pb-3">Rewarding individual work with a family member award</li>
                            <li className="pb-3"> Letting family members set goals and see progress</li>

                        </ul>

                    </div>
                    {/* Column2 */}
                    <div className="about col">
                        <h4 className="ml-4">Getting Started...</h4>
                        <hr />
                        <h5><strong>On your Family Home page:</strong></h5>
                        <ul className="list pb-2">
                            <li>Add family members to your family</li>
                        </ul>
                        <h5><strong>On an admin Family Member page:</strong></h5>
                        <ul className="list pt-2">
                            <li className="pb-3">Add Chores</li>
                            <li className="pb-3">Add Main Awards</li>
                            <li className="pb-3">Edit Wheel Awards</li>
                            <li className="pb-3">Set the Countdown Clock</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="about col">
                        <h4 className="ml-2">Finishing up...</h4>
                        <hr />
                        <h5><strong>The week is over when either</strong></h5>
                        <ul className="list pb-2">
                            <li className="pb-3">The coundown timer reaches 0</li>
                            <li className="pb-3">An admin resets the countdown timer</li>
                        </ul>
                        <h5><strong>When the week is over:</strong></h5>
                        <ul className="list pt-2">
                            <li className="pb-3">Schedule or deliver any awards that were earned but not delivered </li>
                            <li className="pb-3">Choose or create a main family award for the next week</li>
                            <li className="pb-3">Set the countdown clock</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}