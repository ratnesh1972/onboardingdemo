import React from "react";
import { HeadingType } from "../../types/progressTypes";

const Description = (props: HeadingType) => {
  return (
    <div className="description-box">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Description;
