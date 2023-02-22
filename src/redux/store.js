import { configureStore } from "@reduxjs/toolkit"
import addressesReducer from "../features/address/addressSlice"

export const store = configureStore({
  reducer: {
    addresses: addressesReducer,
  },
})
