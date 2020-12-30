import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <div className="app_div">

        <Route exact path="/">
          <Navbar />
        </Route>

      </div>
    </Router>
  )
}

export default App
