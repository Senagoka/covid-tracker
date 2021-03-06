// import "./App.css";
// import CountrySelector from "./components/CountrySelector";
import CountrySelector from "./components/CountrySelector";
import Header from "./components/Header";
import Stats from "./components/Stats";
import img from "./images/covid.jpg"
// import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Header />
      <div className="App" style={{backgroundImage:`url(${img})`}}>
        <h1>WORLD STATISTICS</h1>
        <Stats url="https://covid19.mathdro.id/api" />
        <CountrySelector />
        
      </div>
    </>
  );
}

export default App;
