// Library imports
import { FC } from "react";

// Local imports
import { signOut } from "../utils/auth";

// Props for profile
interface Props {
  userName: string;
}

const Profile: FC<Props> = ({ userName }) => {
  return (
    <div>
      <h1>Hello {userName}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
