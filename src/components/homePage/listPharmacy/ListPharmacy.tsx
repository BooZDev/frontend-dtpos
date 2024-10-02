import React from "react";
import { Flex, Table } from "antd";
import type { TableColumnsType } from "antd";
import { getWeek } from "date-fns";
import Link from "next/link";

const bg_color = [
  "bg-red-300",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
];

const getWeekNumber = (date: Date): number => {
  return getWeek(date);
};

interface DataType {
  key: React.Key;
  name: string;
  code: string;
  address: string;
  week_1: number;
  week_2: number;
  week_3: number;
  week_4: number;
  week_5: number;
  week_6: number;
  any: string;
}

const renderWeek = () => {
  const array = []
   for (let i = 0; i <= getWeekNumber(new Date(2024, 10, 30)) - getWeekNumber(new Date(2024, 10, 1)); i++) {
    const week_number = getWeekNumber(new Date(2024, 10, 1)) + i;
    array.push( {
      title: `Tuần ${week_number}`,
      dataIndex: `week_${i + 1}`,
      key: `week_${i + 1}`,
      render: (text: number) => (
        <div className={`text-center ${bg_color[text]} w-full rounded-md`}>{text}</div>
      ),
    });
  };

  return array;
}

const columns: TableColumnsType<DataType> = [
  { title: "Tên nhà thuốc", dataIndex: "name" },
  { title: "Mã nhà thuốc", dataIndex: "code" },
  { title: "Địa chỉ nhà thuốc", dataIndex: "address" },
  ...renderWeek(),
  { title: "", dataIndex: "any", render: (text: string) => (
    <Link href="/pharmacy/1" className="text-blue-500">{text}</Link>
  ) },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
  (_, i) => ({
    key: i,
    name: `Nhà thuốc số 1...`,
    code: "DTP000001",
    address: `356A giải phóng `,
    week_1: Math.floor(Math.random() * 6),
    week_2: Math.floor(Math.random() * 6),
    week_3: Math.floor(Math.random() * 6),
    week_4: Math.floor(Math.random() * 6),
    week_5: Math.floor(Math.random() * 6),
    week_6: Math.floor(Math.random() * 6),
    any: "...",
  })
);

export default function ListPharmacy() {
  return (
    <Flex gap="middle" vertical className="none md:block">
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        pagination={{ position: ["bottomCenter"] }}
      />
    </Flex>
  );
};
