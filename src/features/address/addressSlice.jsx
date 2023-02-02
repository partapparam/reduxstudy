import { createSlice } from "@reduxjs/toolkit"
import { addressService } from "./addressService"

const addressesSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    //   Add new address to existing Address Array
    appendAddress(state, action) {
      return state.concat(action.payload)
    },
    updateAddress(state, action) {},
    // set addresses after GET Request
    setAddresses(state, action) {
      return state.concat(action.payload)
    },
  },
})

export const { appendAddress, updateAddress, setAddresses } =
  addressesSlice.actions

export const getAllAddresses = () => {
  return async (dispatch, getState) => {
    const addresses = await addressService.getAllAddresses()
    dispatch(setAddresses(addresses.data.data))
  }
}

export default addressesSlice.reducer
