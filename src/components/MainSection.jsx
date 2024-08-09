import "../styles/main.css";
import { LeftMain } from "./LeftMain";
import { RightMain } from "./RightMain";

function MainSection() {
  return (
    <main className="mainContent">
      <LeftMain></LeftMain>
      <RightMain></RightMain>
    </main>
  );
}

export { MainSection };
