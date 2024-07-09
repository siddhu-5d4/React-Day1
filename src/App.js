import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Invalid from './components/Invalid';
import Calculator from './components/Calculator';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Counter />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Invalid />}></Route>
      <Route path="/Calculator" element ={<Calculator />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  ); 
}

export default App;
