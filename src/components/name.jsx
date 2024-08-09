import { useState } from "react";
import "../styles/main.css";

function Name({ currentlyEditing = true }) {
  const [value, setValue] = useState("");

  function handleEditing(editStatus) {}

  if (currentlyEditing == true) {
    return <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />;
  } else {
    return <h1>{value}</h1>;
  }
}

export { Name };
