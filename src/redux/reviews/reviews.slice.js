import { createSlice } from "@reduxjs/toolkit"

const initialState = { cards: [], status: "idle", error: null }

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers(builder) {},
})

// export actions from reducer

// export reducer
export default reviewsSlice.reducer
