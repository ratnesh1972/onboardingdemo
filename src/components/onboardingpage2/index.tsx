import React from "react";
import Description from "../description/Description";
import WorkspaceDetails from "./WorkspaceDetails";

const OnBoardingPage2 = () => {
  return (
    <div className="container">
      <Description
        title="Lets setup a home for all your work"
        subtitle="You can always create another workspace later."
      />
      <WorkspaceDetails />
    </div>
  );
};

export default OnBoardingPage2;
