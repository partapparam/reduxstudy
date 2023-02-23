import { createAsyncThunk } from "@reduxjs/toolkit"
import { reviewService } from "../../services/reviewService"

export const fetchReviewsByAddressId = createAsyncThunk(
  "reviews/fetchReviewsByAddressId",
  async (addressId) => {
    try {
      console.log(addressId)
      const response = await reviewService.getReviewsByAddressId(addressId)
      return response.data
    } catch (error) {
      console.log("error while getting reviews", error)
      throw new Error(error)
    }
  }
)

export const fetchReviewById = createAsyncThunk(
  "reviews/fetchReviewById",
  async (reviewId) => {
    try {
      const response = await reviewService.getReviewById(reviewId)
      return response.data
    } catch (error) {
      console.log("error getting reviews by review ID", error)
      throw new Error(error)
    }
  }
)

// call in action from Slice to dispatch and add new Review to State
export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (body, { dispatch }) => {
    try {
      const response = await reviewService.postReview(body)
      if (response.data.status === "success") {
        // dispatch slice action - TODO
        return response.data
      }
    } catch (error) {
      console.log("Error saving review", error)
      throw new Error(error)
    }
  }
)

export const fetchReviewsByUser = createAsyncThunk(
  "reviews/fetchReviewsByUser",
  async (userId) => {
    // TODO
    // complete reivew pull by user
  }
)
