import { createSlice } from "@reduxjs/toolkit"
import { addressService } from "./addressService"

const addressesSlice = createSlice({
  name: "addresses",
  initialState: { cards: [], status: "string" },
  reducers: {
    //   Add new address to existing Address Array
    appendAddress(state, action) {
      // return state.concat(action.payload)
    },
    updateAddress(state, action) {},
    // set addresses after GET Request
    setAddresses(state, action) {
      // console.log("Here is the state", state)
      console.log("here is the action", action.payload)
      return { ...state, cards: action.payload }
    },
  },
})

export const { appendAddress, updateAddress, setAddresses } =
  addressesSlice.actions

// Selectors
export const selectAllAddresses = (state) => state.addresses.cards
// Make sure addressID is converted to number
export const selectAddressById = (state, addressId) => {
  return state.addresses.cards.find((ad) => ad.address_id === +addressId)
}

// async methods
export const getAllAddresses = () => {
  return async (dispatch, getState) => {
    // const beforeState = getState()
    // if (beforeState.addresses && beforeState.addresses.length) return
    const response = await addressService.getAllAddresses()
    console.log(response)
    dispatch(setAddresses(response.data.data))
  }
}

export const postNewAddress = (body) => {
  return async (dispatch, getState) => {
    const response = await addressService.newAddress(body)
    console.log(response)
  }
}

// Export Reducer
export default addressesSlice.reducer
