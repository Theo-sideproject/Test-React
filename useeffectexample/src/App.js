import './App.css';
import HomePage from "./components/HomePage";
import { Routes , Route, } from "react-router-dom";
import Caracter from "./components/Caracter";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/caracter/:id" element={<Caracter />} />
        </Routes>
    </div>
  );
}

export default App;
