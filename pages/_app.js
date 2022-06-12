import "../styles/globals.css";
import GlobalContext from "../context/GlobalContext";
import { useEffect, useMemo, useReducer, useState } from "react";
import dayjs from "dayjs";
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((e) => (e.id === payload.id ? payload : e));
    case "delete":
      return state.filter((e) => e.id !== payload.id);

    default:
      throw new Error();
  }
}
function initEvents() {
  if (typeof window == "undefined") return [];
  const storageEvents = window.localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

function MyApp({ Component, pageProps }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);

  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((e) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(e.label)
    );
  }, [savedEvents, labels]);
  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setMonthIndex(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);
  useEffect(() => {
    window.localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);
  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((e) => e.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);
  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalenderMonth,
        setSmallCalenderMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        savedEvents,
        setSelectedEvent,
        selectedEvent,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
