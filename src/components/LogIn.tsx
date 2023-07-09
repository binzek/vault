// Library imports
import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Local imports
import { auth, signIn } from "../utils/auth";
import classes from "../styles/Form.module.css";
import { useAppSelector } from "../app/hooks";
import { Logo } from "./";

// Form input fields' types
interface FormInputs {
  email: string;
  password: string;
}

const LogIn: FC = () => {
  // Register react-hook-form
  const { register, handleSubmit } = useForm<FormInputs>();

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
      <div className={`${classes.form} container`}>
        <Logo />
        <h1 className={`${classes.form__heading}`}>
          Log In To Existing Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={`${classes.form__field}`}>
            <span>Email</span>
            <input
              type="email"
              placeholder="johndoe@example.com"
              required
              {...register("email")}
            />
          </label>
          <label className={`${classes.form__field}`}>
            <span>Password</span>
            <input
              type="password"
              placeholder="********"
              required
              {...register("password")}
            />
          </label>
          <button
            type="submit"
            className={`${classes.form__button} button button-primary`}
          >
            Continue
          </button>
        </form>
        <p className={`${classes.form__link}`}>
          Don't have an account? <Link to="/create">Create</Link>
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default LogIn;
