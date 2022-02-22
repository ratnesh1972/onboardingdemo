import React from "react";
import plan1 from "../../assets/images/plan1.png";
import plan2 from "../../assets/images/plan2.png";

function PlanDetails() {
  return (
    <div className="box">
      <div className="plan-group">
        <div className="plan-group-link">
          <img className="icon-img" src={plan1} alt="Plan 1" />
          <p className="text-body-dark">For myself</p>
          <p className="text-body-light">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div className="plan-group-link">
          <img className="icon-img" src={plan2} alt="Plan 2" />
          <p className="text-body-dark">With my team</p>
          <p className="text-body-light">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
      <button className="btn-primary">Create Workspace</button>
    </div>
  );
}

export default PlanDetails;
