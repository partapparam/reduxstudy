import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <h1>Home Page</h1>
        <h3>Address test with Redux</h3>
        <section>
          <Outlet />
        </section>
      </Container>
    </div>
  )
}
