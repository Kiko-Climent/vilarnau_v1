"use client";

import { useState, useEffect } from "react";

const Clock = () => {

  const [time, setTime] = useState(new Date(null));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());

    }, 1000);
    return() => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, "0")}:${minutes}${ampm}`;
  };

  return(
    <div>{formatTime(time)}</div>
  )
};

export default Clock;