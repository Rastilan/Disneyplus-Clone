import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from "./components/Home"
import Detail from './components/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route 
            element={<Login />}
            path="/"
            >

          </Route>
          <Route
            element={<Home /> }
            path="/home"
            >

          </Route>
          <Route
            element={ <Detail />}
            path="/detail/:id"
            >

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
