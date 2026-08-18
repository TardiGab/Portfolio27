"use client";
import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function padZero(number: number) {
    return number < 10 ? "0" + number : number;
  }

  return (
    <span className="text-blue-300">
      {" "}
      {padZero(time.getHours())}
      <span className="animate-blink">:</span>
      {padZero(time.getMinutes())}{" "}
    </span>
  );
}
