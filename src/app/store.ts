// Library import
import { configureStore } from "@reduxjs/toolkit";

// Local imports
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Type of rootstate
export type RootState = ReturnType<typeof store.getState>;

export default store;
