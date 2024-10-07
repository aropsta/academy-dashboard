"use client";
import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Girls",
    count: 50,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#c3ebfa",
  },
  {
    name: "Total",
    count: 106,
    fill: "#ffffff",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-ful h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></Image>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">5,555</h1>
          <h2 className="text-xs text-gray-500">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">5,555</h1>
          <h2 className="text-xs text-gray-500">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
