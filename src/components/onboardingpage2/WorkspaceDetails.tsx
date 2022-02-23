import React, { useState, useContext } from "react";
import ProgressContext from "../../context/ProgressContext";

function WorkspaceDetails() {
  const context = useContext(ProgressContext);

  const [state, setstate] = useState({
    workspace: "",
    url: "",
  });

  const handleWorkspaceChange = (e: any) =>
    setstate({ ...state, workspace: e.target.value });

  const handleURLChange = (e: any) =>
    setstate({ ...state, url: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    context.saveWorkspace(state);
    context.incrementPage();
  };

  return (
    <div className="box">
      <form className="form">
        <div className="form-group">
          <label>Workspace Name</label>
          <input
            type="text"
            name="workspace"
            placeholder="Eden"
            value={state.workspace}
            onChange={handleWorkspaceChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>
            Workspace URL <span className="form-optional">(optional)</span>
          </label>
          <div className="form-group-adornment">
            <span>www.eden.com/</span>
            <input
              type="url"
              name="url"
              placeholder="Example"
              value={state.url}
              onChange={handleURLChange}
              required
            ></input>
          </div>
        </div>
        <button className="btn-primary" type="submit" onClick={handleSubmit}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default WorkspaceDetails;
