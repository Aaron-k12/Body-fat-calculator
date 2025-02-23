import { Link } from "react-router-dom";
import { Text } from "@mantine/core";

const Header = () => {
  return (
    <header className="fixed z-10 flex w-full p-2 bg-white border-b">
      <Link to="/">
        <div className="flex items-center p-2 mr-auto border-2 rounded-lg">
          <img src="./SVGs/applogo.svg" alt="app logo" />
          <Text fw={700}>StayFit</Text>
        </div>
      </Link>
    </header>
  );
};

export default Header;
