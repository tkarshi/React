import "./App.css";

//create component

function AppImage(props) {
  return (
    <img style={{ marginLeft: "10px", marginTop: "5px" }} src={props.url} />
  );
}
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

      <AppImage url="https://placehold.co/600x400.png" />
      <AppImage url="https://placehold.co/600x400" />
      <AppImage url="https://placehold.co/600x400/000000/FFF" />
    </div>
  );
}

export default App;
