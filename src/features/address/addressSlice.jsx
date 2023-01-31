import { createSlice } from "@reduxjs/toolkit"

const addressesSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    //   Add new address to existing Address Array
    appendAddress(state, action) {
      state.concat(action.payload)
    },
    updateAddress(state, action) {},
    setAddress(state, action) {
      state.concat(action.payload)
    },
  },
})

export const { appendAddress, updateAddress, setAddress } =
  addressesSlice.actions

export default addressesSlice.reducer
