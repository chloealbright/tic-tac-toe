import logo from '../assets/logo.svg';
import '../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Tictactoe from "./tictactoe";
// import Background from '../assets/cyberimg.gif'

function App() {
  
  return (
    <div className="App">
      <Tictactoe/>
    </div>
  );
}

export default App;
