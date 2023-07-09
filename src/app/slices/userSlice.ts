// Library imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type for initial state
interface InitialStateType {
  isUser: boolean;
  userName: string;
  userEmail: string;
}

// Initial state
const initialState: InitialStateType = {
  isUser: false,
  userName: "",
  userEmail: "",
};

// Create slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Function to set user's logged in state
    setIsUser: (state, action: PayloadAction<boolean>) => {
      state.isUser = action.payload;
    },

    // Function to set user's displayName
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    // Function to set user's displayName
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
  },
});

// Export slice actions
export const { setIsUser, setUserName, setUserEmail } = userSlice.actions;

// Export slice reducer as default
export default userSlice.reducer;
