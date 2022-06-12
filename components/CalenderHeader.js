import React, { useContext } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex == dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <div className="absolute left-7 z-10 w-6 h-5  bg-white text-[#4285F4]  font-bold text-xl text-center leading-[20px]">
        {dayjs().date()}
      </div>
      {/* <div className="absolute text-[#4285F4] font-bold text-xl left-7 z-10">
        
      </div> */}
      <Image
        src="/cal.svg"
        alt="logo"
        className="mr-4"
        width={48}
        height={48}
      />
      <h1 className="mr-10 ml-4 text-xl text-gray-500 font-bold">
        My Calendar
      </h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 mt-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 mt-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default CalenderHeader;
