// Library imports
import { FC } from "react";
import { Link } from "react-router-dom";

// Local imports
import { signOut } from "../utils/auth";
import classes from "../styles/Hero.module.css";
import { Logo } from "./";

// Props for profile
interface Props {
  userName: string;
}

const Profile: FC<Props> = ({ userName }) => {
  return (
    <section className={`${classes.hero} container`}>
      <Logo />
      <div className={`${classes.hero__text}`}>
        <h1>Hello There, {userName}</h1>
        <p>
          A safe place to store, access, and manage {userName}'s data with ease.
        </p>
      </div>
      <button
        className={`${classes.signout__button}`}
        onClick={() => {
          confirm("Are you sure sign out from VauLT ?") && signOut();
        }}
      >
        Sign Out
      </button>
    </section>
  );
};

export default Profile;
