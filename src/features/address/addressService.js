import axios, { AxiosError } from "axios"
const baseURL = "http://localhost:3005/api/addresses"

const getAllAddresses = () => {
  return axios.get(`${baseURL}/`)
}

const getAddressById = (id) => {
  return axios.get(`${baseURL}/${id}`)
}

const newAddress = (body) => {
  return axios.post(`${baseURL}/address/new`, body)
}

export const addressService = { getAllAddresses, getAddressById, newAddress }
