import "../styles/main.css";

function Section({ children }) {
  return (
    <>
      <div className="section">{children}</div>
    </>
  );
}

export { Section };
