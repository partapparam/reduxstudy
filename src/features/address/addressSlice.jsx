import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { addressService } from "./addressService"

const initialState = { cards: [], status: "idle", error: null }

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

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
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
  extraReducers(builder) {
    builder
      .addCase(fetchAddresses.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = "success"
        state.cards = state.cards.concat(action.payload)
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
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

export const postNewAddress = (body) => {
  return async (dispatch, getState) => {
    const response = await addressService.newAddress(body)
    console.log(response)
  }
}

// Export Reducer
export default addressesSlice.reducer
