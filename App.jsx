import './App.css'
import {Routes,Route} from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import NavBar from './NavBar';
import './index.css'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <NavBar/>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={Home}/>
            <Route path="/blue" element={Blue}/>
            <Route path="/red" element={Red}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
