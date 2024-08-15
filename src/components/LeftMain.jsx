import "../styles/main.css";
import { Section } from "./Section";
import { useState } from "react";
import { BasicInput } from "./RightMain";

let contactHolder = {
  address: "Seattle, Washington, 98107",
  number: "555-555-5555",
  email: "username@example.com",
};

let educationHolder = {
  degree: "B.S. Computer Science",
  date: "October 2020",
  universityName: "University of Example",
  location: "Seattle, Washington",
  comment: "Graduated with Honors",
};

let skillsHolder = ["Typing", "Communication", "Organization", "", ""];
let interestsHolder = ["Exercising", "Music", "History", "Travel", "Community Service"];

function LeftMain({ leftEdit }) {
  return (
    <div className="leftMain">
      <Section>
        <h2>Contact</h2>
        <div className="topLeftMain">
          <BasicInput editing={leftEdit} defaultItem={contactHolder.address} descriptor={"Address"} example={"Seattle, Washington, 98107"}></BasicInput>
          <BasicInput editing={leftEdit} defaultItem={contactHolder.number} descriptor={"Phone Number"} example={"555-555-5555"}></BasicInput>
          <BasicInput editing={leftEdit} defaultItem={contactHolder.email} descriptor={"Email"} example={"username@example.com"}></BasicInput>
        </div>
      </Section>
      <Section>
        <h2>Education</h2>
        <h3>
          <BasicInput editing={leftEdit} defaultItem={educationHolder.degree} descriptor={"Degree"} example={"B.S. Computer Science"}></BasicInput>{" "}
          <BasicInput editing={leftEdit} defaultItem={educationHolder.date} descriptor={"Date Completed"} example={"December, 2020"}></BasicInput>
        </h3>
        <h3>
          <BasicInput editing={leftEdit} defaultItem={educationHolder.universityName} descriptor={"Place of Study"} example={"University of Something"}></BasicInput>
        </h3>
        <h3>
          <BasicInput editing={leftEdit} defaultItem={educationHolder.location} descriptor={"Location"} example={"Seattle, Washington"}></BasicInput>
        </h3>
        <h3>
          <BasicInput editing={leftEdit} defaultItem={educationHolder.comment} descriptor={"Comments"} example={"Graduated with Honors"}></BasicInput>
        </h3>
      </Section>
      <Section>
        <h2>Key Skills</h2>
        <BoilerTwo info={skillsHolder} customEdit={leftEdit} customExample={skillsHolder[0]}></BoilerTwo>
      </Section>
      <Section>
        <h2>Interests</h2>
        <BoilerTwo info={interestsHolder} customEdit={leftEdit} customExample={interestsHolder[0]}></BoilerTwo>
      </Section>
    </div>
  );
}

function BoilerTwo({ info, customEdit, customExample }) {
  return (
    <div className="boiler">
      <h3>
        <BasicInput editing={customEdit} defaultItem={info[0]} example={customExample}></BasicInput>
        <BasicInput editing={customEdit} defaultItem={info[1]} example={customExample}></BasicInput>
        <BasicInput editing={customEdit} defaultItem={info[2]} example={customExample}></BasicInput>
        <BasicInput editing={customEdit} defaultItem={info[3]} example={customExample}></BasicInput>
        <BasicInput editing={customEdit} defaultItem={info[4]} example={customExample}></BasicInput>
      </h3>
    </div>
  );
}

export { LeftMain };
