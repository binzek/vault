// Library imports
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

// Local imports
import classes from "../styles/Form.module.css";
import { Logo } from "./";

// Props for form
interface Props {
  title: string;
  nameField: boolean;
  bottomLink: {
    text: string;
    link: string;
    href: string;
  };
  onSubmit: SubmitHandler<any>;
}

// Form input fields' types
interface FormInputs {
  name?: string;
  email: string;
  password: string;
}

const Form: FC<Props> = ({ title, nameField, bottomLink, onSubmit }) => {
  // Register react-hook-form
  const { register, handleSubmit } = useForm<FormInputs>();

  return (
    <div className={`${classes.form} container`}>
      <Logo />
      <h1 className={`${classes.form__heading}`}>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {nameField && (
          <label className={`${classes.form__field}`}>
            <span>Name</span>
            <input
              type="text"
              placeholder="John Doe"
              required
              {...register("name")}
            />
          </label>
        )}
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
        {bottomLink.text} have an account?{" "}
        <Link to={bottomLink.href}>{bottomLink.link}</Link>
      </p>
    </div>
  );
};

export default Form;
