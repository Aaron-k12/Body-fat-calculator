import React from "react";
import { NumberInput, Select, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormType } from "../Types/FormTypes";

interface FormTypeProps {
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (values: FormType) => void;
  loading: boolean;
}

const Form = ({ setShowResult, handleSubmit, loading }: FormTypeProps) => {
  const form = useForm({
    initialValues: {
      age: "",
      height: "",
      weight: "",
      gender: "",
    },
  });

  return (
    <div className="p-5 border-2 rounded-lg shadow-xl select-none max-w-fullborder">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex flex-col gap-5 border h-[420px] p-2 rounded-md">
          <div>
            <NumberInput
              label="Age"
              placeholder="18"
              min={18}
              required
              {...form.getInputProps("age")}
            />
          </div>
          <div className="flex gap-2">
            <div>
              <NumberInput
                label="Height (cm)"
                placeholder="170"
                min={140}
                required
                {...form.getInputProps("height")}
              />
            </div>
            <div>
              <NumberInput
                label="Weight (kg)"
                placeholder="70"
                min={50}
                required
                {...form.getInputProps("weight")}
              />
            </div>
          </div>
          <div>
            <Select
              label="Gender"
              placeholder="male"
              data={["", "male", "female"]}
              required
              clearable
              {...form.getInputProps("gender")}
            />
          </div>
          <div className="flex gap-5 mt-auto ml-auto">
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                form.reset();
                setShowResult(false);
              }}
            >
              Clear
            </Button>
            <Button variant="variant" type="submit" loading={loading}>
              Calculate
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
