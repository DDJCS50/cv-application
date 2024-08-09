import "../styles/main.css";
import { Section } from "./Section";
import { Name } from "./Name";
import { useState } from "react";
import { MainSection } from "./MainSection";

function Page() {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <header>
        <Name currentlyEditing={edit}></Name>
      </header>
      <MainSection></MainSection>
      <footer>
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setEdit(false);
          }}
        >
          Done
        </button>
      </footer>
    </>
  );
}
export { Page };
