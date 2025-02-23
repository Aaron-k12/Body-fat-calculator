import DataChart from "./Chart";
import ResultTable from "./ResultTable";
import { Text } from "@mantine/core";
import { BodyDataType } from "../Types/FormTypes";

const FormDetails = ({ getResult }: { getResult: BodyDataType }) => {
  const {
    bodyFatPercentageBmi,
    bodyFatCategory,
    idealBodyFat,
    bodyFatToLose,
    bodyFatMass,
    leanBodyMass,
    leanBodyMassPercentage,
  } = getResult;

  return (
    <div className="max-w-[500px]">
      <DataChart
        bodyFatPercentageBmi={bodyFatPercentageBmi}
        leanBodyMassPercentage={leanBodyMassPercentage}
      />
      <div>
        <div>
          <Text size="lg" c="blue">
            Result
          </Text>
          <ResultTable
            bodyFatPercentageBmi={bodyFatPercentageBmi}
            leanBodyMassPercentage={leanBodyMassPercentage}
            bodyFatCategory={bodyFatCategory}
            idealBodyFat={idealBodyFat}
            bodyFatToLose={bodyFatToLose}
            bodyFatMass={bodyFatMass}
            leanBodyMass={leanBodyMass}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
