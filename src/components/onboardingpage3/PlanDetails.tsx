import React, { useState, useContext } from "react";
import plan1 from "../../assets/images/plan1.png";
import plan2 from "../../assets/images/plan2.png";
import ProgressContext from "../../context/ProgressContext";

function PlanDetails() {
  const context = useContext(ProgressContext);

  const [state, setstate] = useState({
    plan: 1,
  });

  const handlePlanChange = (option: number) => setstate({ plan: option });

  const handleSubmit = () => {
    context.savePlan(state);
    context.incrementPage();
  };
  return (
    <div className="box">
      <div className="plan-group">
        <div
          className={` ${
            state.plan === 1 ? "plan-group-link active" : "plan-group-link"
          }`}
          onClick={() => handlePlanChange(1)}
        >
          <img className="icon-img" src={plan1} alt="Plan 1" />
          <p className="text-body-dark">For myself</p>
          <p className="text-body-light">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          className={` ${
            state.plan === 2 ? "plan-group-link active" : "plan-group-link"
          }`}
          onClick={() => handlePlanChange(2)}
        >
          <img className="icon-img" src={plan2} alt="Plan 2" />
          <p className="text-body-dark">With my team</p>
          <p className="text-body-light">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
      <button className="btn-primary" onClick={handleSubmit}>
        Create Workspace
      </button>
    </div>
  );
}

export default PlanDetails;
