import React from "react";
import Description from "../description/Description";
import CheckIcon from "./CheckIcon";
import LaunchButton from "./LaunchButton";

const OnBoardingPage3 = () => {
  return (
    <div className="container">
      <CheckIcon />
      <Description
        title="Congractulations, Eren!"
        subtitle="You have completed onboarding, you can start using Eden!"
      />
      <LaunchButton />
    </div>
  );
};

export default OnBoardingPage3;
