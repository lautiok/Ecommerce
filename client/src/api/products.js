import axios from "./axios";

export const getProductsreq = async () => axios.get("/products")
export const getProductreq = async (_id) => axios.get(`/products/${_id}`)
export const createProductreq = async (product) => {
    const res = new FormData();

    for (const key in product) {
        res.append(key, product[key])
    }

    return axios.post("/products", res, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export const updateProductreq = async (_id, product) => axios.put(`/products/${_id}`, product)
export const deleteProductreq = async (_id) => axios.delete(`/products/${_id}`) 