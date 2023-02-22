import { createSelector } from "@reduxjs/toolkit"

export const selectAllAddresses = (state) => state.addresses.cards
export const selectAllAddressesSelector = createSelector(
  [selectAllAddresses],
  (addresses) => addresses
)
export const selectAddressByIdSelector = createSelector(
  [selectAllAddresses, (state, addressId) => addressId],
  (addresses, addressId) =>
    addresses.filter((ad) => ad.address_id === +addressId)
)
