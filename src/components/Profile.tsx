// Library imports
import { FC } from "react";

// Local imports
import { signOut } from "../utils/auth";
import classes from "../styles/Profile.module.css";

// Props for profile
interface Props {
  userName: string;
}

const Profile: FC<Props> = ({ userName }) => {
  return (
    <section className={`${classes.profile} container`}>
      <div className={`logo`}>
        <img src="/src/assets/icon.svg" alt="VauLT Logo" />
        <span>:VauLT:</span>
      </div>
      <div className={`${classes.profile__text}`}>
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
