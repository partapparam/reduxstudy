import logo from "./logo.svg"
import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./common/NavigationBar"
import { Home } from "./features/home/Home"
import { AddressList } from "./features/address/AddressList"
import { AddressCard } from "./features/address/AddressCard"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="addressList" element={<AddressList />}>
              <Route path=":addressId/card" element={<AddressCard />} />
            </Route>
            <Route path="new" />
            {/* <Route index element={<Home />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
