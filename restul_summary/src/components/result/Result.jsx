import React from "react";
import "./Result.css";
import reaction from "../../assets/images/icon-reaction.svg";
import memory from "../../assets/images/icon-memory.svg";
import verbal from "../../assets/images/icon-verbal.svg";
import visual from "../../assets/images/icon-visual.svg";

const Result = () => {
    return (
        <div className="result-container">
            <div className="result">
                <p className="result__title">Your Result</p>
                <section className="result__score">
                    <p className="result__gain">76</p>
                    <p className="result__full">of 100</p>
                </section>
                <section className="description">
                    <p className="description__title">Great</p>
                    <p className="description__body">
                        You have scored higher than 65% of the people who have
                        taken these tests.
                    </p>
                </section>
            </div>
            <div className="summary">
                <p className="summary__title">Summary</p>
                <div className="summary__container">
                    <div className="summary__type reaction">
                        <section>
                            <img src={reaction} />
                            Reaction
                        </section>
                        <p className="points">
                            80 <span>/ 100</span>
                        </p>
                    </div>
                    <div className="summary__type memory">
                        <section>
                            <img src={memory} />
                            Memory
                        </section>
                        <p className="points">
                            92 <span>/ 100</span>
                        </p>
                    </div>
                    <div className="summary__type verbal">
                        <section>
                            <img src={verbal} />
                            Verbal
                        </section>
                        <p className="points">
                            61 <span>/ 100</span>
                        </p>
                    </div>
                    <div className="summary__type visual">
                        <section>
                            <img src={visual} />
                            Visual
                        </section>
                        <p className="points">
                            72 <span>/ 100</span>
                        </p>
                    </div>
                </div>
                <button className="btn">Continue</button>
            </div>
        </div>
    );
};

export default Result;
