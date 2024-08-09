import "../styles/main.css";
import { Section } from "./Section";

function RightMain() {
  return (
    <div className="rightMain">
      <Section>
        <div className="topRightMain">
          <h2>Profile</h2>
          <p>This is where the information about you goes, just a blurb.</p>
        </div>
      </Section>
      <Section></Section>
    </div>
  );
}

export { RightMain };
