import React from "react";
import Logo from "./components/logo/Logo";
import OnBoardingPage1 from "./components/onboardingpage1";
import OnBoardingPage2 from "./components/onboardingpage2";
import OnBoardingPage3 from "./components/onboardingpage3";
import OnBoardingPage4 from "./components/onboardingpage4";
import ProgressCounter from "./components/progresscounter/ProgressCounter";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <ProgressCounter />
      <OnBoardingPage1 />
    </div>
  );
};

export default App;
