import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import Fetchcomponent from "./components/Fetchcomponent";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main>
        <Main />
        <Fetchcomponent />
      </main>
      <footer>
        <Player />
      </footer>
    </>
  );
}

export default App;
