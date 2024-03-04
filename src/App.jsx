import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route 
            element={<Login />}
            path="/">

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
