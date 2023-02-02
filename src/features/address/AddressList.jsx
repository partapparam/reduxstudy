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

  return (
    <Container>
      <h3>This is the address list</h3>
      <Container>
        <ul>
          {addresses.map((a) => {
            return (
              <li>
                <Link to={a.address_id + "/card"}>{a.street_address}</Link>
              </li>
            )
          })}
        </ul>
      </Container>
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
