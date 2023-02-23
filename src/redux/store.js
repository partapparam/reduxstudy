import { configureStore } from "@reduxjs/toolkit"
import addressesReducer from "./addresses/address.slice"

export const store = configureStore({
  reducer: {
    addresses: addressesReducer,
  },
})
