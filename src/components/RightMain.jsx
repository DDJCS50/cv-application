import { useState } from "react";
import "../styles/main.css";
import { Section } from "./Section";

function RightMain({ rightEdit }) {
  const [job, setJob] = useState({ title: "Web Developer", dateBegin: "5/20/2023", dateEnd: "5/20/2024", companyName: "Startup LLC", location: "Seattle, Washington", description: "Brief description of what the main duties of the job were." });
  const [profile, setProfile] = useState("Basic information describing you, or wassit");

  return (
    <div className="rightMain">
      <Section>
        <div className="topRightMain">
          <h2>Profile</h2>
          <BasicInput editing={rightEdit} defaultItem={profile} descriptor={"About Yourself"}></BasicInput>
        </div>
      </Section>
      <Section>
        <div className="bottomRightMain">
          <h2>Experience</h2>
          <Boiler job={job} rightEdit={rightEdit}></Boiler>
          <Boiler job={job} rightEdit={rightEdit}></Boiler>
          <Boiler job={job} rightEdit={rightEdit}></Boiler>
        </div>
      </Section>
    </div>
  );
}

function BasicInput({ editing, defaultItem, descriptor, example }) {
  const [value, setValue] = useState("");

  if (editing == true) {
    return (
      <label>
        {descriptor}
        <br />
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} placeholder={example} />
      </label>
    );
  } else if (value == "") {
    if (descriptor == "Job Title") {
      return (
        <>
          <p></p>
        </>
      );
    } else if (descriptor == "Date Start") {
      return (
        <>
          <p></p>
        </>
      );
    } else if (descriptor == "Company") {
      return (
        <>
          <p></p>
        </>
      );
    } else if (descriptor == "Degree") {
      return (
        <>
          <p></p>
        </>
      );
    }
    return <p></p>;
  } else {
    if (descriptor == "Job Title") {
      return (
        <>
          <p>{value}</p>
          &bull;
        </>
      );
    } else if (descriptor == "Date Start") {
      return (
        <>
          <p>{value}</p>-
        </>
      );
    } else if (descriptor == "Company") {
      return (
        <>
          <p>{value}</p>
          &bull;
        </>
      );
    } else if (descriptor == "Degree") {
      return (
        <>
          <p>{value}</p>
          &bull;
        </>
      );
    }
    return <p>{value}</p>;
  }
}

function Boiler({ job, rightEdit }) {
  return (
    <div className="boiler">
      <h3>
        <BasicInput editing={rightEdit} defaultItem={job.title} descriptor={"Job Title"} example={"Web Developer"}></BasicInput>{" "}
        <BasicInput editing={rightEdit} defaultItem={job.dateBegin} descriptor={"Date Start"} example={"10/10/2020"}></BasicInput> <BasicInput editing={rightEdit} defaultItem={job.dateEnd} descriptor={"Date End"} example={"10/10/2020"}></BasicInput>
      </h3>
      <h3>
        <BasicInput editing={rightEdit} defaultItem={job.companyName} descriptor={"Company"} example={"Startup LLC"}></BasicInput>{" "}
        <BasicInput editing={rightEdit} defaultItem={job.location} descriptor={"Location"} example={"Seattle, Washington"}></BasicInput>
      </h3>
      <BasicInput editing={rightEdit} defaultItem={job.description} descriptor={"Duties"}></BasicInput>
    </div>
  );
}

export { RightMain, BasicInput };
