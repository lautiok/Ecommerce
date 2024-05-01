import axios from "./axios";

export const getOrdersreq = async () => axios.get("/orders")
export const postOrderreq = async (order) => axios.post("/orders", order)
export const getOrderreq = async (_id) => axios.get(`/orders/${_id}`)
export const updateOrderreq = async (_id, order) => axios.put(`/orders/${_id}`, order)
export const deleteOrderreq = async (_id) => axios.delete(`/orders/${_id}`)
