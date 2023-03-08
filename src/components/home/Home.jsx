import React from "react"
import Container from "react-bootstrap/Container"
import { Outlet } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import Radar from "radar-sdk-js"
import { useState, useEffect } from "react"

export const Home = () => {
  const [search, setSearch] = useState("")

  const searchWrapper = (
    <div className="search-wrapper">
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          value={search}
          /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="sr-only">Search radar api</span>
      </label>
    </div>
  )

  useEffect(() => {
    const getData = setTimeout(() => {
      Radar.autocomplete(
        {
          query: search,
          layer: "fine",
          limit: 10,
          country: "US",
        },
        function (err, result) {
          if (err) {
            console.log(console.error)
          }
          console.log(result)
        }
      )
    }, 2000)

    return () => clearTimeout(getData)
  }, [search])

  return (
    <div>
      <NavigationBar />
      <Container>{searchWrapper}</Container>

      <Container>
        <h1>Home Page</h1>
        <h3>Address test with Redux</h3>
        <section>
          <Outlet />
        </section>
      </Container>
    </div>
  )
}
