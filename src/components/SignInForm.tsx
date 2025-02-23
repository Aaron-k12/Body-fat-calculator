import { TextInput, Button, PasswordInput } from "@mantine/core";

const SignInForm = () => {
  return (
    <form>
      <div className="flex flex-col w-full gap-5">
        <div>
          <TextInput placeholder="Email" label="Email" type="email" required />
        </div>
        <div>
          <PasswordInput placeholder="Password" label="Password"  required />
        </div>
        
        <div className="flex justify-between w-full ">
          <Button type="button" variant="white">
            New Member? Sign Up
          </Button>
          <div className="flex ml-auto gap-x-5"> 
          <Button type="button" variant="default">
            cancel
          </Button>
          <Button type="button" variant="fill">
            Sign in
          </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
