import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { redirect, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAddressByIdSelector } from "../../redux/addresses/address.selectors"

export const AddressCard = () => {
  const { addressId } = useParams()
  let address = useSelector((state) =>
    selectAddressByIdSelector(state, addressId)
  )
  // address = address[0]

  if (!address) {
    redirect("/addressList")
  }
  console.log(addressId, address)

  let content = (
    <Card>
      <Card.Body>
        <Card.Title>{address.street_address}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {address.zipcode}
        </Card.Subtitle>
        <Card.Text>{address.address_type}</Card.Text>
      </Card.Body>
    </Card>
  )

  const loadingContent = (
    <div>
      <h2>There is nothing to show yet</h2>
    </div>
  )

  return (
    <Container>
      <div>{address && content}</div>
    </Container>
  )
}
