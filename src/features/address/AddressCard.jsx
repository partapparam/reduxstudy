import React from "react"
import Container from "react-bootstrap/Container"
import { redirect, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export const AddressCard = () => {
  const { addressId } = useParams()
  const address = useSelector((state) =>
    state.addresses.find((a) => a.address_id === +addressId)
  )

  if (!address) {
    redirect("/addressList")
  }

  return (
    <Container>
      <h3>This is the Address card</h3>
      <div>
        <h4>
          This is the Address Id: {address.address_id} and{" "}
          {address.street_address}
        </h4>
      </div>
    </Container>
  )
}
