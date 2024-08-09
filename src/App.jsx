import { useState } from "react";
import { Page } from "./components/page";
import { Section } from "./components/section";

function App() {
  return (
    <>
      <form action="#" method="get">
        <Page>
          <Section>
            <input type="text" />
          </Section>
          <Section>
            <input type="email" />
          </Section>
          <Section>
            <input type="number" />
          </Section>
        </Page>
      </form>
    </>
  );
}

export default App;
