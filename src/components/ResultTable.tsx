import { Table } from "@mantine/core";
import moment from "moment";
import { BodyDataType } from "../Types/FormTypes";

const ResultTable = ({
  bodyFatPercentageBmi,
  bodyFatCategory,
  idealBodyFat,
  bodyFatToLose,
  leanBodyMassPercentage,
} : BodyDataType) => {
  const date = new Date().toISOString();

  const rows = (
    <Table.Tr>
      <Table.Td>{moment(date).format("DD/MM/YYYY")}</Table.Td>
      <Table.Td>{Math.ceil(bodyFatPercentageBmi)}</Table.Td>
      <Table.Td>{bodyFatCategory}</Table.Td>
      <Table.Td>{idealBodyFat}</Table.Td>
      <Table.Td>{bodyFatToLose}</Table.Td>
      <Table.Td>{leanBodyMassPercentage}</Table.Td>
    </Table.Tr>
  );

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Body Fat %</Table.Th>
          <Table.Th>Body Fat Category</Table.Th>
          <Table.Th>Ideal Body Fat</Table.Th>
          <Table.Th>Body Fat To Lose</Table.Th>
          <Table.Th>Lean Body Mass %</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default ResultTable;
