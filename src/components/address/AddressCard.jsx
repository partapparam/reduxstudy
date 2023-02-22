import React from "react"
import Container from "react-bootstrap/Container"
import { redirect, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAddressById } from "./addressSlice"

export const AddressCard = () => {
  const { addressId } = useParams()
  const address = useSelector((state) => selectAddressById(state, addressId))

  if (!address) {
    redirect("/addressList")
  }

  return (
    <Container>
      <h3>This is the Address card</h3>
      <div>
        <h4>
          This is the Address Id: {address && address.address_id} and{" "}
          {address && address.street_address}
        </h4>
      </div>
    </Container>
  )
}
