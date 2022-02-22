import React from "react";

interface heading {
  title: String;
  subtitle: String;
}
const Description = (props: heading) => {
  return (
    <div className="description-box">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Description;
