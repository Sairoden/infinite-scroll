import "./styles/app.scss";
import loader from "./loader.svg";
import ImageContainer from "./components/ImageContainer";

function App() {
  return (
    <div className="App">
      <h1>UNSPLASH API - INFINITE SCROLL</h1>
      <div className="loader" id="loader">
        <img src={loader} alt="Loading" hidden />
      </div>
      {/* Image Container */}
      <ImageContainer />
    </div>
  );
}

export default App;
