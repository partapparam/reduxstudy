import logo from "./logo.svg"
import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./common/NavigationBar"
import Container from "react-bootstrap/Container"

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Container>
        <h3>Address test with Redux</h3>
      </Container>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
