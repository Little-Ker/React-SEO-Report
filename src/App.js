import React from 'react'
import {
  HashRouter as Router, Route, Routes 
} from 'react-router-dom'
import './App.css'
import MainView from 'view/mainView'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainView/>} />
      <Route exact path="MainView" element={<MainView/>} />
      <Route path="*" element={<MainView/>} />
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <Router>
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App