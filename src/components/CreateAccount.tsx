// Library imports
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Local imports
import { createAccount } from "../utils/auth";

// Form input fields' types
interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: FC = () => {
  // Register react-hook-form
  const { register, handleSubmit } = useForm<FormInputs>();

  // Submit handler function for input form
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Create a new user on form submit
    await createAccount({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name</span>
          <input type="text" {...register("name")} />
        </label>
        <br />
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

export default CreateAccount;
