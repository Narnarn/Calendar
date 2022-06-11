import React from "react";
import Image from "next/image";
function CreateEventButton() {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <Image
        src="/plus.svg"
        alt="create event"
        width={28}
        height={28}
        className="w-7 h-7"
      />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
}

export default CreateEventButton;
