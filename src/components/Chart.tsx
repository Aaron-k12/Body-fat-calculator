import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DataChart = ({
  bodyFatPercentageBmi,
  leanBodyMassPercentage,
}: {
  bodyFatPercentageBmi: number;
  leanBodyMassPercentage: number;
}) => {
  // initialize chart data
  const [userData, setUserData] = useState({
    labels: ["Body Fat Percentage", "Lean Body Percentage"],
    datasets: [
      {
        label: "Body Composition",
        data: [0, 0],
        backgroundColor: ["#FFCE56", "#4a6452"],
      },
    ],
  });

  // update chart data
  useEffect(() => {
    if (
      bodyFatPercentageBmi !== undefined &&
      leanBodyMassPercentage !== undefined
    ) {
      setUserData({
        labels: ["Body Fat Percentage", "Lean Body Percentage"],
        datasets: [
          {
            label: "Body Composition",
            data: [bodyFatPercentageBmi, leanBodyMassPercentage],
            backgroundColor: ["#FFCE56", "#4a6452"],
          },
        ],
      });
    }
  }, [bodyFatPercentageBmi, leanBodyMassPercentage]);

  return (
    <div>
      <Doughnut data={userData} />
    </div>
  );
};

export default DataChart;
