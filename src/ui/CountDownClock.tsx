import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

const CountdownClock = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const expiryTime = new Date('2024-09-24T12:00:00-04:00'); // Eastern Time is UTC-4

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: expiryTime, onExpire: () => console.warn('onExpire called') });

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="time-count day">
        <span>{days}</span>days
      </div>
      <div className="time-count hour">
        <span>{hours}</span>hours
      </div>
      <div className="time-count min">
        <span>{minutes}</span>mins
      </div>
      <div className="time-count sec">
        <span>{seconds}</span>secs
      </div>
    </>
  );
}

export default CountdownClock;
