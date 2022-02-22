import React, { useContext } from "react";
import Logo from "./components/logo/Logo";
import OnBoardingPage1 from "./components/onboardingpage1";
import OnBoardingPage2 from "./components/onboardingpage2";
import OnBoardingPage3 from "./components/onboardingpage3";
import OnBoardingPage4 from "./components/onboardingpage4";
import ProgressCounter from "./components/progresscounter/ProgressCounter";
import ProgressContext from "./context/ProgressContext";
const App = () => {
  const context = useContext(ProgressContext);

  return (
    <div className="App">
      <Logo />
      <ProgressCounter />
      {context?.state.currentPage === 1 && <OnBoardingPage1 />}
      {context?.state.currentPage === 2 && <OnBoardingPage2 />}
      {context?.state.currentPage === 3 && <OnBoardingPage3 />}
      {context?.state.currentPage === 4 && <OnBoardingPage4 />}
    </div>
  );
};

export default App;
