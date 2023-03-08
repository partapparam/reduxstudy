import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { selectAllAddressesSelector } from "../../redux/addresses/address.selectors"
import { fetchAddresses } from "../../redux/addresses/address.thunks"
import { AddressCard } from "./AddressCard"

export const AddressList = () => {
  const dispatch = useDispatch()
  const addressesStatus = useSelector((state) => state.addresses.status)
  // only fetch addresses once there is a change or the status is idle, otherwise, it will run everytime the component rerenders.
  useEffect(() => {
    if (addressesStatus === "idle") {
      dispatch(fetchAddresses())
    }
  }, [addressesStatus, dispatch])
  const addresses = useSelector(selectAllAddressesSelector)

  const loadingContent = (
    <div>
      <h2>The content is loading</h2>
    </div>
  )

  return (
    <Container>
      <h3>This is the address list</h3>
      <div>
        {addresses.length === 0
          ? loadingContent
          : addresses.map((a) => (
              <li key={a.address_id}>
                <Link to={a.address_id + "/card"}>{a.street_address}</Link>
              </li>
            ))}
      </div>
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
