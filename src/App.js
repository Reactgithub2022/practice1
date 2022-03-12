//import Counter from './Counter';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <Routes>
      <Route path="/" element={Home}/>
      <Route path="/about" element={About}/>
      <Route path="/contact" element={Contact}/>
      </Routes>
    </div>
  );
}

export default App;
