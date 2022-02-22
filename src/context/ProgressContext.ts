import { createContext } from "react";
import { ProgressContextType } from "../types/progressTypes";

//Creating ProgressContext to pass the state down the component tree.
const ProgressContext = createContext<ProgressContextType | any>(null);

export default ProgressContext;
