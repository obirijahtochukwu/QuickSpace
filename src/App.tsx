import { useState } from "react";
import Navigation from "./shared/navigation";
import Header from "./shared/header";
import Sponsors from "./shared/sponsors";
import HowToGrow from "./shared/how-to-grow";
import BetterSecurity from "./shared/BetterSecurity/index";
import WhyWillYouChoose from "./shared/why-will-you-choose";
import WeHelp from "./shared/we-help";
import WhatPeopleSay from "./shared/what-people-say";
import Footer from "./shared/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <article className="pt-9">
      {/* <Navigation /> */}
      <Header />
      <Sponsors />
      <HowToGrow />
      <BetterSecurity />
      <WhyWillYouChoose />
      <WeHelp />
      <WhatPeopleSay />
      <Footer />
    </article>
  );
}

export default App;
