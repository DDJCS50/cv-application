import { useState } from "react";
import "../styles/main.css";

function Name({ currentlyEditing = false }) {
  const [value, setValue] = useState("");

  if (currentlyEditing == true) {
    return <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />;
  } else if (value == "") {
    return <h1>John Default</h1>;
  } else {
    return <h1>{value}</h1>;
  }
}

export { Name };
