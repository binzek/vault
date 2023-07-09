// Library imports
import { FC, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Local imports
import { createAccount, auth } from "../utils/auth";
import { useAppSelector } from "../app/hooks";
import { Form } from "./";

// Form input fields' types
interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: FC = () => {
  // Get user's status
  const { isUser } = useAppSelector((state) => state.user);

  // Navigator
  const navigate = useNavigate();

  // Submit handler function for input form
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Create a new user on form submit
    await createAccount({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    navigate("/");
    window.location.reload();
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
        title="Create A New Account"
        nameField={true}
        bottomLink={{ text: "Already", link: "Log In", href: "/login" }}
        onSubmit={onSubmit}
      />
    );
  } else {
    return null;
  }
};

export default CreateAccount;
