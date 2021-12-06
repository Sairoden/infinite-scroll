import "./styles/app.scss";
import loader from "./loader.svg";

function App() {
  return (
    <div className="App">
      <h1>UNSPLASH API - INFINITE SCROLL</h1>
      <div className="loader" id="loader">
        <img src={loader} alt="Loading" hidden />
      </div>
    </div>
  );
}

export default App;
