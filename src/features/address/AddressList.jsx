import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllAddresses, selectAllAddresses } from "./addressSlice"

export const AddressList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAddresses())
  }, [])
  const addresses = useSelector(selectAllAddresses)
  console.log(addresses)
  // const content =
  //   addresses.length === 0 ? (
  //     <h2>There is nothing to show here</h2>
  //   ) : (
  //     <ul>
  //       {addresses.map((a) => {
  //         return (
  //           <li key={a.address_id}>
  //             <Link to={a.address_id + "/card"}>{a.street_address}</Link>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   )

  return (
    <Container>
      <h3>This is the address list</h3>
      {/* <Container>{content}</Container> */}
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
