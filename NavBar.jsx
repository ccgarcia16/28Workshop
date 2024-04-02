import {Routes,Route,Link} from 'react-router-dom'
import "./index.css"

const NavBar = () => {
  return (
  <>
  <Link to="/"><button>Home</button></Link>
  <Link to="./blue"><button>Blue</button></Link>
  <Link to="/red"><button>Red</button></Link>
  </>
  )
}

export default NavBar