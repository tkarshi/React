import "./App.css";
import AppImage, { AppImageTittle } from "./Components/AppImage";
// import AppImage from "./Components/AppImage"; //default component export way
// import { AppImage,TestImage } from "./Components/AppImage"; // named export way of component import

function App() {
  return (
    <div className="App">
      {/* <h1>Hi This is the first web app in React!</h1>
      <img src="https://placehold.co/400" />
      <img
        style={{ marginLeft: "10px" }}
        src="https://placehold.co/600x400?text=Hello+World"
      />
      <img
        style={{ marginLeft: "10px" }}
        src="https://placehold.co/600x400.png"
      /> */}

      {/* Call the Component */}

      <AppImage url={"https://placehold.co/600x400.png"} />
      <AppImage url={"https://placehold.co/600x400"} />
      <AppImage url={"https://placehold.co/600x400/000000/FFF"} />
      <AppImageTittle tittle={"This is the first React App"} />
    </div>
  );
}

export default App;
