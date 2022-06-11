import "../styles/globals.css";
import GlobalContext from "../context/GlobalContext";
import { useState } from "react";
import dayjs from "dayjs";

function MyApp({ Component, pageProps }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
