import './App.css';
import Home from './container/Home'
import About from './container/About';
import Navigation from './container/Navigation';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>

        <Routes>

          <Route path='About' element={<About />}/>
          <Route path='/' element={<Home />}/>

        </Routes>

    </div>
  );
}

export default App;
