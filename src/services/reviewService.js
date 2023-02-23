import axios from "axios"
const baseURL = "http://localhost:3005/api"

const getReviewsByAddressId = (addressId) => {
  return axios.get(`${baseURL}/address/${addressId}/reviews`)
}

const getReviewById = (reviewId) => {
  return axios.get(`${baseURL}/reviews/${reviewId}`)
}

const postReview = (body) => {
  return axios.post(`${baseURL}/reviews/new`)
}

const getAllUserReviews = (userId) => {
  return axios.get(`${baseURL}/users/reviews`)
}

export const reviewService = {
  getReviewsByAddressId,
  getReviewById,
  postReview,
  getAllUserReviews,
}
