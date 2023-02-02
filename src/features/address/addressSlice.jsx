import { createSlice } from "@reduxjs/toolkit"
import { addressService } from "./addressService"

const addressesSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    //   Add new address to existing Address Array
    appendAddress(state, action) {
      state.concat(action.payload)
    },
    updateAddress(state, action) {},
    setAddresses(state, action) {
      state.concat(action.payload)
    },
  },
})

export const { appendAddress, updateAddress, setAddresses } =
  addressesSlice.actions

export const getAllAddresses = () => {
  return async (dispatch, getState) => {
    const stateBefore = getState()
    console.log("state Before", stateBefore)
    const addresses = await addressService.getAllAddresses()
    console.log(addresses.data)
    // dispatch(setAddresses(addresses.data))
  }
}

export default addressesSlice.reducer
