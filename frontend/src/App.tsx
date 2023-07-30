import manager from "./core/UserManager";

function App() {
  return (
    <>
      <p>Home page</p>

      <button onClick={() => manager.signinRedirect()}>Login!</button>
    </>
  );
}
export default App;
