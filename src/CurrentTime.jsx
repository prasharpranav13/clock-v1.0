let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="current-time">
      The current time is {time.toLocaleDateString()}{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
