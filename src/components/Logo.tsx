// Library imports
import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <div className={`logo`}>
      <Link to="/">
        <img src="/icon.svg" alt="VauLT Logo" />
        <span>:VauLT:</span>
      </Link>
    </div>
  );
};

export default Logo;
