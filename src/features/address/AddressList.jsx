import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectAllAddresses, fetchAddresses } from "./addressSlice"

export const AddressList = () => {
  const dispatch = useDispatch()
  const addressesStatus = useSelector((state) => state.addresses.status)
  // only fetch addresses once there is a change or the status is idle, otherwise, it will run everytime the component rerenders.
  useEffect(() => {
    if (addressesStatus === "idle") {
      dispatch(fetchAddresses())
    }
  }, [addressesStatus, dispatch])
  const addresses = useSelector(selectAllAddresses)

  const content =
    addresses.length === 0 ? (
      <h2>There is nothing to show here, search for an Address</h2>
    ) : (
      <ul>
        {addresses.map((a) => {
          return (
            <li key={a.address_id}>
              <Link to={a.address_id + "/card"}>{a.street_address}</Link>
            </li>
          )
        })}
      </ul>
    )

  return (
    <Container>
      <h3>This is the address list</h3>
      <Container>{content}</Container>
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
