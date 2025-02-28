import { useEffect, useState } from "react";
import { TextScramble } from "./text-scramble"; // Adjust import path

const TimeDisplay = () => {
  const [timeParts, setTimeParts] = useState(() => {
    const now = new Date();
    return {
      hoursMinutes: now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      }),
      seconds: now.getSeconds().toString().padStart(2, "0"),
      period: now.getHours() >= 12 ? "PM" : "AM",
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeParts({
        hoursMinutes: now.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }),
        seconds: now.getSeconds().toString().padStart(2, "0"),
        period: now.getHours() >= 12 ? "pm" : "am",
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-manrope m-0 flex items-center whitespace-nowrap p-0 text-base font-medium tabular-nums leading-[1em] tracking-[-0.02em] text-white">
      <span>{timeParts.hoursMinutes}:</span>
      <TextScramble duration={600} className="inline-block text-base">
        {timeParts.seconds}
      </TextScramble>
      <span className="ml-1">{timeParts.period}</span>
    </div>
  );
};

export default TimeDisplay;
