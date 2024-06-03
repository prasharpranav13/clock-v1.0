import "./App.css";
import AppName from "./AppName";
import AppDesc from "./AppDesc";
import CurrentTime from "./CurrentTime";
function App() {
  return (
    <div className="clock-container">
      <div className="clock">
        <AppName></AppName>
        <AppDesc></AppDesc>
        <CurrentTime></CurrentTime>
      </div>
    </div>
  );
}

export default App;
