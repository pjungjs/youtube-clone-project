import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from "./components/common/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ShowVideo from "./components/pages/ShowVideo";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<ShowVideo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
