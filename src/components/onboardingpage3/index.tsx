import React from "react";
import Description from "../description/Description";
import PlanDetails from "./PlanDetails";

const OnBoardingPage3 = () => {
  return (
    <div className="container">
      <Description
        title="How are you planning to use Eden?"
        subtitle="We'll streamline your setup accordingly."
      />
      <PlanDetails />
    </div>
  );
};

export default OnBoardingPage3;
