import React from "react";
import Logo from "./components/logo/Logo";
import OnBoardingPage1 from "./components/onboardingpage1";
import OnBoardingPage2 from "./components/onboardingpage2";
import OnBoardingPage3 from "./components/onboardingpage3";
import OnBoardingPage4 from "./components/onboardingpage4";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <OnBoardingPage4 />
    </div>
  );
};

export default App;
