// Library imports
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Local imports
import { signIn } from "../utils/auth";

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
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email</span>
          <input type="email" {...register("email")} />
        </label>
        <br />
        <label>
          <span>Password</span>
          <input type="password" {...register("password")} />
        </label>
        <br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default LogIn;
