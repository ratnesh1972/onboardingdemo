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
    error: "",
    isValidated: false,
  });

  //Function to validate url - After changing state, returning true or false as state update takes time and might give different results in handleSubmit.
  const validateUrl = () => {
    const value = url.value;
    const pattern = /\b(https?|ftp|file):\/\/[A-Za-z0-9+&@#%?=~_|!:,.;]*[A-Za-z0-9+&@#%=~_|]/;
    if (value !== "") {
      if (pattern.test(value)) {
        //Change state to pass validation
        seturl({ ...url, isValidated: true });
        //Return true as we are passing the validation.
        return true;
      } else {
        //Change state to fail validation and update error
        seturl({
          ...url,
          error: "Please enter valid url!",
          isValidated: false,
        });
        //Return false as we are not passing the validation.
        return false;
      }
    } else {
      //Change state to fail validation and update error.
      seturl({
        ...url,
        error: "Url is required!",
        isValidated: false,
      });
      //Return false as we are not passing the validation.
      return false;
    }
  };

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
    const urlValidation = validateUrl();

    if (workspaceValidation && urlValidation) {
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
          {!url.isValidated && (
            <label className="label-error">{url.error}</label>
          )}
        </div>
        <button className="btn-primary" type="submit" onClick={handleSubmit}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default WorkspaceDetails;
