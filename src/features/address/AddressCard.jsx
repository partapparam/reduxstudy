import React from "react"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"

export const AddressCard = () => {
  let { addressId } = useParams()
  console.log(addressId)

  return (
    <Container>
      <h3>This is the Address card</h3>
      <div>
        <h4>This is the Address Id: {addressId}</h4>
      </div>
    </Container>
  )
}
