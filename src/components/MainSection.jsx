import "../styles/main.css";
import { LeftMain } from "./LeftMain";
import { RightMain } from "./RightMain";

function MainSection({ mainEdit }) {
  return (
    <main className="mainContent">
      <LeftMain leftEdit={mainEdit}></LeftMain>
      <RightMain rightEdit={mainEdit}></RightMain>
    </main>
  );
}

export { MainSection };
