import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  cards: [],
  status: "idle",
  error: null,
}

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reviewAdded(state, action) {
      state.reviews.push(action.payload)
    },
    reactionAdded(state, action) {
      const { reviewId, review } = action.payload
      const existingReview = state.reviews.find(
        (review) => review.review_id === reviewId
      )
      if (existingReview) {
        console.log("we sent a like")
      }
    },
    reviewUpdated(state, action) {
      const { id, title } = action.payload
      const existingReview = state.reviews.find((review) => review.id === id)
      if (existingReview) {
        existingReview.title = title
      }
    },
  },
})

export const { reviewAdded, reactionAdded, reviewUpdated } =
  reviewsSlice.actions
export default reviewsSlice.reducer

export const selectAllReviews = (state) => state.reviews.cards
export const selectReviewById = (state, reviewId) => {
  return state.reviews.cards.find((review) => review.id === reviewId)
}
