import React, { useEffect, useState } from "react";
import axios from "axios";
import { quotesData } from "../api/fetchQuotesAPI";
import { Text } from "@mantine/core";

type QuotesType = {
  author: string;
  id: number;
  quote: string;
};

const MotivationQuotesComponent = () => {
  const [motivationQuotes, setMotivationQuotes] = useState<QuotesType>();

  useEffect(() => {
    fetchData();
  }, []);

  // making fetch request
  const fetchData = async () => {
    try {
      const response = await axios.request(quotesData);
      setMotivationQuotes(response?.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col">
      <Text fs="italic" c="blue">
        {motivationQuotes?.quote}
      </Text>
      <div className="ml-auto">
        {motivationQuotes?.author !== "Unknown" &&
        motivationQuotes?.author !== "Anonymous" ? (
          <Text fw={700}>{motivationQuotes?.author}</Text>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MotivationQuotesComponent;
