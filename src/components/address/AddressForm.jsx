import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/col"
import { postNewAddress } from "../../redux/addresses/addressSlice"
import { useDispatch, useSelector } from "react-redux"

export const AddressForm = () => {
  const dispatch = useDispatch()
  const [streetAddress, setStreetAddress] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const canSave =
    [streetAddress, zipcode].every(Boolean) && addRequestStatus === "idle"

  const onSaveAddressClicked = async (event) => {
    console.log("can save", canSave)
    event.preventDefault()
    if (canSave) {
      try {
        setAddRequestStatus("pending")
        await dispatch(postNewAddress({ streetAddress, zipcode })).unwrap()
        console.log("this does not run")
        setStreetAddress("")
        setZipcode("")
      } catch (error) {
        console.log("This does run")
        console.log("Failed to save address", error)
      } finally {
        setAddRequestStatus("idle")
        console.log("changing the status back after request")
      }
    }
  }

  return (
    <Container>
      <h1 className="mb-auto">New Address Form</h1>
      <Row className="justify-content-md-center">
        <Col lg="6">
          <Form className="mb-auto" onSubmit={onSaveAddressClicked}>
            <Form.Group className="mb-3" controlId="addressStreet">
              <Form.Label className="label">Street Address</Form.Label>
              <Form.Control
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="zipcode">
              <Form.Label className="label">Zip Code</Form.Label>
              <Form.Control
                type="number"
                placeholder="00000"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button disabled={!canSave} variant="primary" type="submit">
              Save Address
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
