import logo from "./logo.svg"
import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/home/Home"
import { AddressList } from "./components/address/AddressList"
import { AddressCard } from "./components/address/AddressCard"
import { AddressForm } from "./components/address/AddressForm"
import Radar from "radar-sdk-js"

const publishableKey = "prj_test_pk_633a7aabf6b5f11c00ba2d1c4b896ec6d53d9c7d"

Radar.initialize(publishableKey, {
  cacheLocationMinutes: 30,
})

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="addressList" element={<AddressList />}>
              <Route path=":addressId/card" element={<AddressCard />} />
            </Route>
            <Route path="new" element={<AddressForm />} />
            {/* <Route index element={<Home />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
