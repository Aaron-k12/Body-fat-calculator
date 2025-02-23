import { BodyFatCategoryType, FormType } from "./Types/FormTypes";

export const calculate = (data: FormType) => {
  const { weight, height, age, gender } = data;

  const bodyMassIndex = weight / Math.pow(height / 100, 2);
  let bodyFatPercentageBmi = 0;

  if (gender === "male") {
    if (age > 17) {
      bodyFatPercentageBmi = 1.2 * bodyMassIndex + 0.23 * age - 16.2;
    } else {
      bodyFatPercentageBmi = 1.51 * bodyMassIndex - 0.7 * age - 2.2;
    }
  } else {
    if (age > 17) {
      bodyFatPercentageBmi = 1.2 * bodyMassIndex + 0.23 * age - 5.4;
    } else {
      bodyFatPercentageBmi = 1.51 * bodyMassIndex - 0.7 * age + 1.4;
    }
  }

  bodyFatPercentageBmi = bodyFatPercentageBmi < 0 ? 0 : bodyFatPercentageBmi;

  const bodyFatMass = (((bodyFatPercentageBmi * weight) / 100) *2.20462).toFixed(1);
  const leanBodyMass = ((weight - Number(bodyFatMass)) * 2.20462).toFixed(1);

  const totalWeightInLbs = (weight * 2.20462).toFixed(1); // Total weight in lbs

  const leanBodyMassPercentage = (
    (Number(leanBodyMass) / Number(totalWeightInLbs)) *
    100
  ).toFixed(1);

  const bodyFatCategory = typeof gender === 'string' && getCategory(gender, bodyFatPercentageBmi);
  const idealBodyFat = typeof gender === 'string' && getIdealBf(age, gender).toFixed(1);
  const bodyFatToLose = (
    (((bodyFatPercentageBmi - idealBodyFat) * weight) / 100) *
    2.20462
  ).toFixed(1);

  return {
    bodyFatPercentageBmi,
    bodyFatCategory,
    idealBodyFat,
    bodyFatToLose,
    bodyFatMass,
    leanBodyMass,
    leanBodyMassPercentage,
  };
};

// function to get category
const getCategory = (gender: string, bfpNavi: number) => {
  const bfCategories: BodyFatCategoryType[] | string = [
    {
      description: "Essential fat",
      female: "0-13",
      male: "0-5",
    },
    {
      description: "Athletes",
      female: "14-20",
      male: "6-13",
    },
    {
      description: "Fitness",
      female: "21-24",
      male: "14-17",
    },
    {
      description: "Average",
      female: "25-31",
      male: "18-24",
    },
    {
      description: "Obese",
      female: "32-100",
      male: "25-100",
    },
  ];
  
  return bfCategories.find((x) => {
    const range = x[gender]?.split("-");
    return (
      range && 
      Number(bfpNavi.toFixed()) >= parseFloat(range[0]) &&
      Number(bfpNavi.toFixed()) <= parseFloat(range[1])
    );
  })?.description ?? 'No Description for this body type';
};



// function to get ideal body fat
const getIdealBf = (age: number, gender: string) => {
  const idealBfList = [
    {
      age: 20,
      female: 17.7,
      male: 8.5,
    },
    {
      age: 25,
      female: 18.4,
      male: 10.5,
    },
    {
      age: 30,
      female: 19.3,
      male: 12.7,
    },
    {
      age: 35,
      female: 21.5,
      male: 13.7,
    },
    {
      age: 40,
      female: 22.2,
      male: 15.3,
    },
    {
      age: 45,
      female: 22.9,
      male: 16.4,
    },
    {
      age: 50,
      female: 25.2,
      male: 18.9,
    },
    {
      age: 55,
      female: 26.3,
      male: 20.9,
    },
  ];
  age = age > 55 ? 55 : age;
//   return idealBfList?.find((x) => {
//     return age <= x.age;
//   })[gender];
return idealBfList?.find((x) => age <= x.age)?.[gender] ?? "Gender not found";
};

