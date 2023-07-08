// Library imports
import { TypedUseSelectorHook, useSelector } from "react-redux";

// Local imports
import { RootState } from "./store";

// Custom hook to use instead of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
