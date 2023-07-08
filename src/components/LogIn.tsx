// Library imports
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

// Local imports
import { signIn } from "../utils/auth";
import classes from "../styles/Form.module.css";

// Form input fields' types
interface FormInputs {
  email: string;
  password: string;
}

const LogIn: FC = () => {
  // Register react-hook-form
  const { register, handleSubmit } = useForm<FormInputs>();

  // Submit handler function for input form
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Signin with the given data on form submit
    await signIn({ email: data.email, password: data.password });
  };

  return (
    <div className={`${classes.form} container`}>
      <div className={`logo`}>
        <Link to="/">
          <img src="/src/assets/icon.svg" alt="VauLT Logo" />
          <span>:VauLT:</span>
        </Link>
      </div>
      <h1 className={`${classes.form__heading}`}>Log In To Existing Account</h1>
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
};

export default LogIn;
