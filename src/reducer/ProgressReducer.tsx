import ProgressCounter from "../components/progresscounter/ProgressCounter";
import {
  INCREMENTCOUNTER,
  SAVEPERSONALDETAILS,
  SAVEWORKSPACE,
  SAVEPLAN,
  RESETALL,
} from "../actiontypes/progressActionTypes";
import { ProgressStateType, ProgressActionType } from "../types/progressTypes";

const ProgressReducer = (
  state: ProgressStateType,
  action: ProgressActionType
): ProgressStateType => {
  switch (action.type) {
    case INCREMENTCOUNTER:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case SAVEPERSONALDETAILS:
      return {
        ...state,
        fullName: action.payload.name,
        displayName: action.payload.display,
      };
    case SAVEWORKSPACE:
      return {
        ...state,
        workspaceName: action.payload.workspace,
        workspaceURL: action.payload.url,
      };
    case SAVEPLAN:
      return {
        ...state,
        planOption: action.payload.plan,
      };
    case RESETALL:
      return {
        fullName: "",
        displayName: "",
        workspaceName: "",
        workspaceURL: "",
        planOption: 1,
        currentPage: 1,
      };
    default:
      return state;
  }
};

export default ProgressReducer;
