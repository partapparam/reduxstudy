import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/col"
import { postNewAddress } from "./addressSlice"
import { useDispatch, useSelector } from "react-redux"

export const AddressForm = () => {
  const dispatch = useDispatch()
  const [streetAddress, setStreetAddress] = useState("")
  const [zipcode, setZipcode] = useState(0)
  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const canSave =
    [streetAddress, zipcode].every(Boolean) && addRequestStatus === "idle"

  const onSaveAddressClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending")
        await dispatch(postNewAddress({ streetAddress, zipcode })).unwrap()
        setStreetAddress("")
        setZipcode(0)
      } catch (error) {
        console.error("Failed to save address", error)
      } finally {
        setAddRequestStatus("idle")
      }
    }
  }

  return (
    <Container>
      <h1 className="mb-auto">New Address Form</h1>
      <Row className="justify-content-md-center">
        <Col lg="6">
          <Form className="mb-auto">
            <Form.Group className="mb-3" controlId="addressStreet">
              <Form.Label className="label">Street Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="zipcode">
              <Form.Label className="label">Zip Code</Form.Label>
              <Form.Control type="number" placeholder="Zip Code"></Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={onSaveAddressClicked}
            >
              Save Address
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
