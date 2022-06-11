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
    setMonthIndex(dayjs().month());
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <Image
        src="/logo.png"
        alt="logo"
        className="mr-4"
        width={48}
        height={48}
      />
      <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calender</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
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
