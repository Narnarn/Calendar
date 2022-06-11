import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../lib/utils";
import GlobalContext from "../context/GlobalContext";

function SmallCalender() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);
  return (
    <div className="mt-9">
      <header className="flex justify-around">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 ">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600">
            chevron_right
          </span>
        </button>
      </header>
    </div>
  );
}

export default SmallCalender;
