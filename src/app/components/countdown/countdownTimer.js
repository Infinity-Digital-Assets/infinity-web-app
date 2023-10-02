import React from "react";
import { useCountdown } from "../countdown/useCountdown";
import DateTimeDisplay from "../countdown/dateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="single-entity">
        <DateTimeDisplay value={days} type={"Days"} />
      </div>
      <p id="semi-colon">:</p>
      <div className="single-entity">
        <DateTimeDisplay value={hours} type={"Hours"} />
      </div>
      <p id="semi-colon">:</p>
      <div className="single-entity">
        <DateTimeDisplay value={minutes} type={"Min"} />
      </div>
      <p id="semi-colon">:</p>
      <div className="single-entity">
        <DateTimeDisplay value={seconds} type={"Sec"} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  // if (days + hours + minutes + seconds <= 0) {
  //   return <ExpiredNotice />;
  // } else {
  //   return (
  //     <ShowCounter
  //       days={days}
  //       hours={hours}
  //       minutes={minutes}
  //       seconds={seconds}
  //     />
  //   );
  // }
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
