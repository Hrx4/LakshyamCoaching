import React, { useState, useEffect } from "react";
import './CountdownTimer.css'
const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-12-31T23:59:59"); // Set your target date here

    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(interval);
        // Handle what should happen when the countdown ends
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="counter">
      <div className="days">
        <div className="value">{countdown.days < 10 ? `0${countdown.days}` : countdown.days}</div>
        <span>Days</span>
      </div>
      <div className="hours">
        <div className="value">{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}</div>
        <span>Hours</span>
      </div>
      <div className="minutes">
        <div className="value">{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}</div>
        <span>Minutes</span>
      </div>
      <div className="seconds">
        <div className="value">{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}</div>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
