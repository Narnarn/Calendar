import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

function Day({ day, rowIdx }) {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center ">
        {rowIdx == 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm text-center p-1 my-1 ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {""}
      </div>
    </div>
  );
}

export default Day;
