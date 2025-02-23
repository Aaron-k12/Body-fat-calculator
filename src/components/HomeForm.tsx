import { Text, Divider, Button } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
const HomeForm = ({ signInModal }) => {

  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="flex flex-col min-w-[400px] p-4 border-4 rounded-lg">
      <div className="flex">
        <Text size="xl" fw={700}>
          Hello, welcome to{" "}
        </Text>
          <p className="inline-flex items-center m-0">
            <img src="./SVGs/applogo.svg" alt="app logo"  />
          StayFit
          </p>
      </div>

      <Divider />

      <div className="flex gap-5 mt-2 ml-auto">
        {/* <Button type="button" variant="outline" onClick={() => {signInModal()}}>
          Sign In
        </Button> */}
        <Link to="/fat-calculator">
          <Button onClick={() => setIsLoading(true)} loading={isLoading}>
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeForm;
