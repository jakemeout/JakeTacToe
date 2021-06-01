import TicTacToeReact from "./TicTacToeReact";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <TicTacToeReact />
    </div>
  );
}

export default App;
