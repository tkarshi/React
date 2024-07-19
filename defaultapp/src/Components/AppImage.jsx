//create named component
// export function AppImage(props) {
//   return (
//     <img style={{ marginLeft: "10px", marginTop: "5px" }} src={props.url} />
//   );
// }

// export function TestImage(props) {
//   return (
//     <img style={{ marginLeft: "10px", marginTop: "5px" }} src={props.url} />
//   );
// }

//default component
function AppImage(props) {
  return (
    <img style={{ marginLeft: "10px", marginTop: "5px" }} src={props.url} />
  );
}

//named export
function AppImageTittle(props) {
  return <h1>{props.tittle}</h1>;
}

export default AppImage;

export { AppImageTittle };
