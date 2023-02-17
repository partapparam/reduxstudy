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

export const postNewAddress = createAsyncThunk(
  "addresses/postNewAddress",
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
      .addCase(postNewAddress.fulfilled, (state, action) => {
        state.cards.push(action.payload)
      })
      .addCase(postNewAddress.rejected, (state, action) => {
        state.status = "failed"
        console.log("the request failed")
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

// Export Reducer
export default addressesSlice.reducer
