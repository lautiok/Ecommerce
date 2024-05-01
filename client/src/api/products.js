import axios from "./axios";

export const getProductsreq = async () => axios.get("/products")
export const getProductreq = async (_id) => axios.get(`/products/${_id}`)
export const createProductreq = async (product) => axios.post("/products", product)
export const updateProductreq = async (_id, product) => axios.put(`/products/${_id}`, product)
export const deleteProductreq = async (_id) => axios.delete(`/products/${_id}`) 