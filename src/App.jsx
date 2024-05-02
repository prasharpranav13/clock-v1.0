import "./App.css";
import AppName from "./AppName";
import AppDesc from "./AppDesc";
import CurrentTime from "./CurrentTime";
function App() {
  return (
    <div className="clock-container">
      <AppName></AppName>
      <AppDesc></AppDesc>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
