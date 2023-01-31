import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet, Link } from "react-router-dom"

export const AddressList = () => {
  return (
    <Container>
      <h3>This is the address list</h3>
      <Container>
        <ul>
          <li>
            <Link to="1/card">Address 1</Link>
          </li>
          <li>
            <Link to="2/card">Address 2</Link>
          </li>
        </ul>
      </Container>
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
