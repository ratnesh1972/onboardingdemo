import React, { useState, useContext } from "react";
import ProgressContext from "../../context/ProgressContext";

function WorkspaceDetails() {
  const context = useContext(ProgressContext);

  const [workspace, setworkspace] = useState({
    value: "",
    error: "",
    isValidated: false,
  });

  const [url, seturl] = useState({
    value: "",
  });

  //Function to validate workspace.
  const validateWorkspace = () => {
    const value = workspace.value;
    if (value !== "") {
      setworkspace({ ...workspace, isValidated: true });
      return true;
    } else {
      setworkspace({
        ...workspace,
        error: "Workspace name is required!",
        isValidated: false,
      });
      return false;
    }
  };

  const handleWorkspaceChange = (e: any) => {
    const value = e.target.value;
    setworkspace({ ...workspace, value });
  };

  const handleURLChange = (e: any) => {
    const value = e.target.value;
    seturl({ ...url, value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const workspaceValidation = validateWorkspace();

    if (workspaceValidation) {
      const data = {
        workspace: workspace.value,
        url: url.value,
      };
      context.saveWorkspace(data);
      context.incrementPage();
    }
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
            value={workspace.value}
            onChange={handleWorkspaceChange}
            required
          ></input>
          {!workspace.isValidated && (
            <label className="label-error">{workspace.error}</label>
          )}
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
              value={url.value}
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
