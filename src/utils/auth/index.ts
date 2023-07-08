// Library imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase";

// Params for createAccount function
interface createAccountParams {
  name: string;
  email: string;
  password: string;
}

// Firebase auth functiom
const auth = getAuth(app);

// Authentication error handling function
const handleError = (error: string) => {
  if (error.includes("weak-password")) {
    return "Password must contain 8 letters";
  } else if (error.includes("already-in-use")) {
    return "Email is already in use. Please try different one";
  } else if (error.includes("invalid-email")) {
    return "Please enter a correct email address";
  } else {
    return error;
  }
};

// Function to create user with email and password
export const createAccount = async ({
  name,
  email,
  password,
}: createAccountParams) => {
  try {
    // Create a user with email and password
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update user's display name to the name provided
    updateProfile(response.user, {
      displayName: name,
    });
  } catch (error: any) {
    // Alert error if there any
    alert(handleError(error.code));
  }
};
