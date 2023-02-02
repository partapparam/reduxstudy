import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllAddresses } from "./addressSlice"

export const AddressList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAddresses())
  }, [])
  const addresses = useSelector((state) => state.addresses)
  console.log(addresses)
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
