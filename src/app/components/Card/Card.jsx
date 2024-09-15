"use client";
import React, { useState } from "react";
import frontend from "../../Images/frontend.svg";
import tick from "../../Images/tick.svg";
import ui from "../../Images/ui.svg";
import stars from "../../Images/stars.svg";
import "./styles/card.css";
import Image from "next/image";
function Card({ info, styles }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <main className="main" style={{ marginRight: `${styles}vw` }}>
        {!toggle ? (
          <section>
            <section>
              <h1 className="jobHeading">{info.Heading}</h1>
              <h3 className="tenure">Tenure - 90 days</h3>
              <div className="rating">
                <div className="ratingNumber">4.5</div>
                <Image src={stars} alt="stars" />
              </div>
            </section>
            <section className="skillsContainer">
              <div className="skills">Skills required:</div>
              <div className={info.images ? "" : "HR"}>
                {info.images ? (
                  <Image src={info.images} alt="Hello" />
                ) : (
                  "Recruitment, Employee, Engagement"
                )}
              </div>
            </section>

            <section>
              <div className="eligibility">Eligibility:</div>
              <div>
                <div className="eligibleInfo">
                  <Image src={tick} alt="Tick" />
                  {info.eligibility[0]}
                </div>
                <div className="eligibleInfo">
                  <Image src={tick} alt="Tick" />
                  {info.eligibility[1]}
                </div>
                <div className="eligibleInfo">
                  <Image src={tick} alt="Tick" />
                  {info.eligibility[2]}
                </div>
              </div>
            </section>
            <button className="applyNow">Apply Now</button>
            <button
              className="knowMore"
              onClick={(e) => {
                e.preventDefault();
                setToggle(!toggle);
              }}
            >
              Know More &gt;
            </button>
          </section>
        ) : (
          <section>
            <section>
              <h3 className="role">Role Overview</h3>
              <div className="roleInfo">{info.overview}</div>
            </section>

            <section className="skillsContainer">
              <div className="skills2">Skills required:</div>
              <div className={info.images ? "" : "HR"}>
                {info.images ? (
                  <Image src={info.images} alt="Hello" />
                ) : (
                  "Recruitment, Employee, Engagement"
                )}
              </div>
            </section>

            <section>
              <div className="responsibility">Key Responsibilities:</div>
              <div className="eligibleInfo">
                <Image src={tick} alt="tick" />
                {info.responsibilities[0]}
              </div>
              <div className="eligibleInfo">
                <Image src={tick} alt="tick" />
                {info.responsibilities[1]}
              </div>
              <div className="eligibleInfo">
                <Image src={tick} alt="tick" />
                {info.responsibilities[2]}
              </div>
            </section>
            <button
              className="backButton"
              onClick={(e) => {
                e.preventDefault();
                setToggle(!toggle);
              }}
            >
              Back &gt;
            </button>
          </section>
        )}
      </main>
    </>
  );
}

export default Card;
