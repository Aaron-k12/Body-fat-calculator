import HomeForm from "../components/HomeForm";
import MotivationQuotesComponent from "../components/MotivationQuotesComponent";


const Home = () => {

  return (
    <div className="grid h-screen lg:grid-cols-2">
      <div className="relative overflow-hidden">
        <img
          src="./images/fitness-image-4.jpg"
          className="hidden object-cover w-full h-full border lg:block"
          alt=""
        />
        
      </div>
      <div className="flex flex-col gap-28 min-[400px]:h-screen place-content-center place-items-center">
        <HomeForm />
        <div className="max-w-[500px] p-4">
          <MotivationQuotesComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
