import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <main className="p-4 flex gap-4 flex-col md:flex-row ">
      {/*LEFT*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"></UserCard>
          <UserCard type="teacher"></UserCard>
          <UserCard type="parent"></UserCard>
          <UserCard type="staff"></UserCard>
        </div>
        {/* MIDDLE CHARTS  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <FinanceChart></FinanceChart>
        </div>
      </div>
      {/*RIGHT*/}
      <div className="w-full lg:w-1/3">RIGHT</div>
    </main>
  );
};

export default AdminPage;
