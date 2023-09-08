import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import data from "/src/data.js"

function App() {
  const cardData = data.map(item => <Card key = {item.id} item = {item} />)
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="card-list">
        {cardData}
      </div>

  </div>
  )
}

export default App
