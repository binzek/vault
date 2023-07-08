// Library imports
import { FC } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

// Local imports
import { auth } from "../utils/auth";
import { useAppSelector } from "../app/hooks";
import { setIsUser, setUserName } from "../app/slices/userSlice";
import { Profile } from ".";
import classes from "../styles/Hero.module.css";

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

  if (isUser) {
    return <Profile userName={userName} />;
  } else {
    return (
      <section className={`${classes.hero} container`}>
        <div className={`logo`}>
          <img src="/src/assets/icon.svg" alt="VauLT Logo" />
          <span>:VauLT:</span>
        </div>
        <div className={`${classes.hero__text}`}>
          <h1>
            Elevate Your Data,
            <br />
            Securely and Efficiently
          </h1>
          <p>
            Safely store, access, and manage your data with ease in Vault's
            secure and efficient signup and login app.
          </p>
        </div>
        <div className={`${classes.hero__buttons}`}>
          <Link to="/create" className="button button-primary">
            Create Account
          </Link>
          <Link to="/login" className="button">
            Log In
          </Link>
        </div>
      </section>
    );
  }
};

export default Home;
