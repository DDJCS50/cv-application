import "../styles/main.css";
import { Section } from "./section";
import { Name } from "./name";
import { useState } from "react";

function Page({ children }) {
  const [edit, setEdit] = useState(true);
  return (
    <>
      <header>
        <Name currentlyEditing={edit}></Name>
      </header>
      <main className="mainContent">{children}</main>
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
