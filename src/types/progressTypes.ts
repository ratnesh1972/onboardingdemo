import PersonalDetails from "../components/onboardingpage1/PersonalDetails";

export type ProgressStateType = {
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceURL: string;
  planOption: number;
  currentPage: number;
};

export type ProgressActionType = {
  type: string;
  payload?: any | void;
};

export type HeadingType = {
  title: string;
  subtitle: string;
};

export type ProgressContextType = {
  state: ProgressStateType;
  incrementPage: () => void;
  savePersonalDetails: () => void;
  saveWorkspace: () => void;
  savePlan: () => void;
  resetAll: () => void;
};

export type PersonalDetailsType = {
  name: string;
  display: string;
};

export type WorkspaceDetailsType = {
  workspace: string;
  url: string;
};

export type PlanDetailsType = {
  plan: number;
};
