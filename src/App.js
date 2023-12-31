
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from './Heading';
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <Heading />
          <SearchEngine />
          <CurrentWeather />
          <Forecast />
        </div>
      </div>
      <p className="footer">
        <a href="https://github.com/Maribau11/weather-react-app" target="_blank" rel="noreferrer">Open-source</a> code. Coded by Mariam Baulackey
      </p>
    </div>
  );
}

export default App;
