import React from 'react'
import {
  HashRouter as Router, Route, Routes 
} from 'react-router-dom'
import './App.css'
// import Navbar from 'component/navbar/Navbar'
import MainView from 'view/mainView'
import ViewB from 'view/ViewB'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainView/>} />
      <Route exact path="MainView" element={<MainView/>} />
      <Route exact path="viewB" element={<ViewB/>} />
      <Route path="*" element={<MainView/>} />
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App