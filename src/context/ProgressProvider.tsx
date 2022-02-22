import React, { useReducer } from "react";
import {
  ProgressStateType,
  PersonalDetailsType,
  WorkspaceDetailsType,
  PlanDetailsType,
} from "../types/progressTypes";
import ProgressReducer from "../reducer/ProgressReducer";
import {
  INCREMENTCOUNTER,
  SAVEPERSONALDETAILS,
  SAVEWORKSPACE,
  SAVEPLAN,
  RESETALL,
} from "../actiontypes/progressActionTypes";
import ProgressContext from "./ProgressContext";

function ProgressProvider(props: any) {
  //Initial state of forms.
  const initialState: ProgressStateType = {
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    planOption: 1,
    currentPage: 1,
  };

  //Reducer to dispatch actions to change state and save form data.
  const [state, dispatch] = useReducer(ProgressReducer, initialState);

  //Function to increment current page count.
  const incrementPage = () => dispatch({ type: INCREMENTCOUNTER });

  //Function to save personal details.
  const savePersonalDetails = (data: PersonalDetailsType) =>
    dispatch({ type: SAVEPERSONALDETAILS, payload: data });

  //Function to save workspace details.
  const saveWorkspace = (data: WorkspaceDetailsType) =>
    dispatch({ type: SAVEWORKSPACE, payload: data });

  //Function to save plan details.
  const savePlan = (data: PlanDetailsType) =>
    dispatch({ type: SAVEPLAN, payload: data });

  //Function to reset state after clicking on next on 4th page.
  const resetAll = () => dispatch({ type: RESETALL });

  return (
    <ProgressContext.Provider
      value={{
        state,
        incrementPage,
        savePersonalDetails,
        saveWorkspace,
        savePlan,
        resetAll,
      }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
}

export default ProgressProvider;
