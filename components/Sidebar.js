import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalender from "./SmallCalender";
import Labels from "./Labels";

function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalender />
      <Labels />
    </aside>
  );
}

export default Sidebar;
