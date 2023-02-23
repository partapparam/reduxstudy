import { createSelector } from "@reduxjs/toolkit"

export const selectAllAddresses = (state) => state.addresses
export const selectAllAddressesSelector = createSelector(
  [selectAllAddresses],
  (addresses) => addresses.cards
)
export const selectAddressByIdSelector = createSelector(
  [selectAllAddressesSelector, (state, addressId) => addressId],
  (addresses, addressId) => {
    const address = addresses.filter((ad) => ad.address_id === +addressId)
    return address[0]
  }
)
