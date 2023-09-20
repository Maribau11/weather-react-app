
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from './Heading';
import CurrentWeather from './CurrentWeather';
import SearchEngine from './SearchEngine';
import Forecast from './Forecast';
function App() {
  return (
    <div className="App">
      <Heading/>
      <SearchEngine/>
      <CurrentWeather/>
      <Forecast/>

    </div>
  );
}

export default App;
