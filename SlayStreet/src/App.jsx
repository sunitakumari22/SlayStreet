import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Dashboard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        {/* <Route path="/" element={<><Navbar></Navbar></>} /> */}
        <Route path="/" element={<><Navbar></Navbar> <Dashboard></Dashboard></>} />
        
      </Routes>
    </Router>
  )
}

export default App
