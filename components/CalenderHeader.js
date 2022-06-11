import React from "react";
import Image from "next/image";
function CalenderHeader() {
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
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>

        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
    </header>
  );
}

export default CalenderHeader;
