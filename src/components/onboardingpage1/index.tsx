import React from "react";
import Description from "../description/Description";
import WorkspaceForm from "./PersonalDetails";

const OnBoardingPage1 = () => {
  return (
    <div className="container">
      <Description
        title="Welcome! First things first..."
        subtitle="You can always change them later."
      />
      <WorkspaceForm />
    </div>
  );
};

export default OnBoardingPage1;
