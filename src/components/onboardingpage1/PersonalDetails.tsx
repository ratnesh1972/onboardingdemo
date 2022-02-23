import React, { useState, useContext } from "react";
import ProgressContext from "../../context/ProgressContext";

const PersonalDetails = () => {
  const context = useContext(ProgressContext);

  const [state, setstate] = useState({
    name: "",
    display: "",
  });

  const handleNameChange = (e: any) =>
    setstate({ ...state, name: e.target.value });

  const handleDisplayChange = (e: any) =>
    setstate({ ...state, display: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    context.savePersonalDetails(state);
    context.incrementPage();
  };

  return (
    <div className="box">
      <form className="form">
        <div className="form-group mb-20">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Steve Jobs"
            value={state.name}
            onChange={handleNameChange}
            required
          ></input>
        </div>
        <div className="form-group mb-20">
          <label>Display Name</label>
          <input
            type="text"
            name="dispaly"
            placeholder="Steve"
            value={state.display}
            onChange={handleDisplayChange}
            required
          ></input>
        </div>
        <button className="btn-primary" type="submit" onClick={handleSubmit}>
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
