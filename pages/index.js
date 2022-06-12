import Head from "next/head";
import { getMonth } from "../lib/utils";
import CalenderHeader from "../components/CalenderHeader";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import { useState, useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/EventModal";

export default function Home() {
  const [curMonth, setCurMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex  flex-1">
          <Sidebar />
          <Month month={curMonth} />
        </div>
      </div>
    </div>
  );
}
