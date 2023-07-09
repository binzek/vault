// Library imports
import { FC, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Local imports
import { auth, signIn } from "../utils/auth";
import { useAppSelector } from "../app/hooks";
import { Form } from "./";

// Form input fields' types
interface FormInputs {
  email: string;
  password: string;
}

const LogIn: FC = () => {
  // Get user's status
  const { isUser } = useAppSelector((state) => state.user);

  // Navigator
  const navigate = useNavigate();

  // Submit handler function for input form
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Signin with the given data on form submit
    await signIn({ email: data.email, password: data.password });
    navigate("/");
  };

  useEffect(() => {
    isUser
      ? navigate("/")
      : onAuthStateChanged(auth, (user) => {
          user && navigate("/");
        });
  }, []);

  if (!isUser) {
    return (
      <Form
        title="Log In To Existing Account"
        nameField={false}
        bottomLink={{ text: "Don't", link: "Create", href: "/create" }}
        onSubmit={onSubmit}
      />
    );
  } else {
    return null;
  }
};

export default LogIn;
