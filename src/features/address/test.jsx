import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { addressService } from "./addressService"

const initialState = { cards: [], status: "idle", error: null }

// Async Thunks
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    try {
      const response = await addressService.getAllAddresses()
      return response.data.data
    } catch (error) {
      console.log("error while getting all reviews")
    }
  }
)

export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (review) => {
    try {
      const response = await addressService.newAddress(review)
      return response.data
    } catch (error) {
      console.log("error while saving the review")
    }
  }
)

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state, action) => {
        state.status = "pending"
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.cards.concat(action.payload)
      })
      .addCase(postReview.fulfilled, (state, action) => {
        //   this should perhaps just be direct from the review object instead of the review returned from the server.
        state.cards.push(action.payload)
      })
  },
})

// export actions from slice reducers
// export const {test } = reviewsSlice.actions

// create Selectors
export const getAllReviews = (state) => state.reviews.cards
export const getReviewById = (state, reviewid) =>
  state.reviews.cards.find((r) => r.id === reviewid)

export default reviewsSlice.reducer
