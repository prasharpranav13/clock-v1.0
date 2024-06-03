import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // const timerId = setInterval(() => {
  //   setTime(new Date());
  // }, 1000);
  // let time = new Date();
  return (
    <p className="current-time">
      The current time is {time.toLocaleDateString()}{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
