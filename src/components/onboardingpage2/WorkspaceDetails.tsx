import React from "react";

function WorkspaceDetails() {
  return (
    <div className="box">
      <form className="form">
        <div className="form-group">
          <label>Workspace Name</label>
          <input type="text" name="workspace" placeholder="Eden"></input>
        </div>
        <div className="form-group">
          <label>
            Workspace URL <span className="form-optional">(optional)</span>
          </label>
          <div className="form-group-adornment">
            <span>www.eden.com/</span>
            <input type="url" name="dispaly" placeholder="Example"></input>
          </div>
        </div>
        <button className="btn-primary" type="submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default WorkspaceDetails;
