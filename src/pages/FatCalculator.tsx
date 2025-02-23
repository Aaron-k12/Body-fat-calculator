import { useState } from "react";
import Form from "../components/Form";
import FormDetails from "../components/FormDetails";
import { BodyDataType } from "../Types/FormTypes";
import { calculate } from "../funtions";
import { FormType } from "../Types/FormTypes";
import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import Header from "../components/Header";


const FatCalculator = () => {
  const [getResult, setGetResult] = useState<BodyDataType>();
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: FormType) => {
    //checks
    if (Object.keys(values).length < 4) {
      return;
    }

    setLoading(true);
    const result: BodyDataType = calculate(values);
    if (result) {
      setShowResult(true);
      setGetResult(result);
    }
    setLoading(false);
  };

  return (
    <>
    <Header />
    <div className="flex flex-col h-screen">
      <Link to="/" className="pt-24 ml-5">
        <FaBackspace size={40} color="#339af0" />
      </Link>
      <div className="grid h-full gap-5 lg:grid-cols-2">
        <div className="flex w-full place-content-center">
          <div className="h-full">
            <Form
              setShowResult={setShowResult}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
        <div className="flex border-l-2 place-content-center">
          <div className="">
            {!showResult ? (
              <iframe
                title="placeholder image"
                src="https://lottie.host/embed/7a8d02f2-06a1-4d96-abf2-7fd0e4a0f956/6lg6z7Ye8P.json"
                className="hidden h-full lg:block"
              ></iframe>
            ) : (
              getResult !== undefined && <FormDetails getResult={getResult} />
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FatCalculator;
