// Library imports
import { FC } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

// Local imports
import { auth } from "../utils/auth";
import { useAppSelector } from "../app/hooks";
import { setIsUser, setUserName } from "../app/slices/userSlice";

const Home: FC = () => {
  // New redux dispatch
  const dispatch = useDispatch();

  // Get user's current states
  const { isUser, userName } = useAppSelector((state) => state.user);

  // Execute when user status changes
  // Eg: when sign in and when sign out
  onAuthStateChanged(auth, (user) => {
    // If there is user signed in
    if (user) {
      dispatch(setIsUser(true));
      dispatch(setUserName(user.displayName || ""));
    } else {
      dispatch(setIsUser(false));
      dispatch(setUserName(""));
    }
  });

  return (
    <div>
      <h1>Welcome to :VauLT:</h1>
      {isUser && <h2>Hello, {userName}</h2>}
      <Link to="/create">Create Account</Link>
      <br />
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default Home;
