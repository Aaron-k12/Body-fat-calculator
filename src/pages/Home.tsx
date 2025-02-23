import HomeForm from "../components/HomeForm";
import SignInForm from "../components/SignInForm";
import MotivationQuotesComponent from "../components/MotivationQuotesComponent";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { openModal } from "@mantine/modals";

const Home = () => {
  // modal function 
  const signInModal = () => {
    openModal({
      title: "Already a member?",
      size: "lg",
      radius: "md",
      children: (
        <>
          <SignInForm />
        </>
      ),
    });
  };

  return (
    <div className="grid h-screen lg:grid-cols-2">
      <div className="relative overflow-hidden">
        <img
          src="./images/fitness-image-4.jpg"
          className="hidden object-cover w-full h-full border lg:block"
          alt=""
        />
        {/* <LazyLoadImage
          src="./images/fitness-image-4.jpg"
          // width="100%"
          // height="100%"
          placeholderSrc="./images/fitness-image-2.jpg"
          alt="Image Alt"
          effect="blur"
          className="hidden object-cover w-full h-full border lg:block"
        /> */}
      </div>
      <div className="flex flex-col gap-28 min-[400px]:h-screen place-content-center place-items-center">
        <HomeForm signInModal={signInModal}/>
        <div className="max-w-[500px] p-4">
          <MotivationQuotesComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
