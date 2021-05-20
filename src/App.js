
import './App.css';
import LocationForm from './locationform.js';
import Header from './header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import WeatherInput from './weather';



function App() {
  return (
    <div className="App">
      <Header />
      <LocationForm />
      {/* <WeatherInput /> */}
    </div>
  );
}

export default App;
