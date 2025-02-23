/* eslint-disable @typescript-eslint/no-explicit-any */
export type BodyFatCategoryType = {
  description: string;
  female: string;
  male: string;
};

export interface FormType {
  age: number;
  height: number;
  weight: number;
  gender: string | number;
}

export interface FormInputTypes {
  age: string;
  height: string;
  weight: string;
  gender: string;
}

export interface BodyDataType {
  // bodyFatPercentageBmi: number;
  // bodyFatCategory: number;
  // idealBodyFat: number;
  // bodyFatToLose: number;
  // bodyFatMass: number;
  // leanBodyMass: number;
  // leanBodyMassPercentage: number;
  bodyFatPercentageBmi: number;
  bodyFatCategory: string;
  idealBodyFat: any;
  bodyFatToLose: string;
  bodyFatMass: string;
  leanBodyMass: string;
  leanBodyMassPercentage: number;
}
