import React from "react";

function PersonalDetails() {
  return (
    <div className="box">
      <form className="form">
        <div className="form-group mb-20">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Steve Jobs"></input>
        </div>
        <div className="form-group mb-20">
          <label>Display Name</label>
          <input type="text" name="dispaly" placeholder="Steve"></input>
        </div>
        <button className="btn-primary" type="submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default PersonalDetails;
