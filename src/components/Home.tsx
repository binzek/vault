// Library imports
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <h1>Welcome to :VauLT:</h1>
      <Link to="/create">Create Account</Link>
      <br />
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default Home;
