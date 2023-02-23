import { createSlice } from "@reduxjs/toolkit"
import { fetchAddresses, postAddress } from "./address.thunks"

const initialState = { cards: [], status: "idle", error: null }

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
      .addCase(postAddress.fulfilled, (state, action) => {
        state.cards.push(action.payload)
      })
      .addCase(postAddress.rejected, (state, action) => {
        state.status = "failed"
        console.log("the request failed")
      })
  },
})

export const { appendAddress, updateAddress, setAddresses } =
  addressesSlice.actions

// Export Reducer
export default addressesSlice.reducer
