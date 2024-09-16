import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  function getTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getTime();
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};
