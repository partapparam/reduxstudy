import { createAsyncThunk } from "@reduxjs/toolkit"
import { addressService } from "../../services/addressService"

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async () => {
    try {
      const response = await addressService.getAllAddresses()
      console.log(response.data)
      return response.data.data
    } catch (error) {
      console.log("error fetching the results", error)
    }
  }
)

export const postAddress = createAsyncThunk(
  "addresses/postAddress",
  async (address) => {
    try {
      console.log(address)
      const response = await addressService.newAddress(address)
      return response.data
    } catch (error) {
      console.log("error while saving address", error)
      throw new Error(error)
    }
  }
)
