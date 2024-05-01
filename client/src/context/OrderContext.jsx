import { createContext, useContext, useState } from "react";
import { deleteOrderreq, getOrderreq, getOrdersreq, postOrderreq, updateOrderreq } from "../api/orders";

const OrderContext = createContext();

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrder debe ser utilizado dentro de un OrderProvider");
    }
    return context;
}

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState();
    const [order, setOrder] = useState([]);

    const getOrders = async () => {
        try {
            const res = await getOrdersreq();
            setOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getOrder = async (_id) => {
        try {
            const res = await getOrderreq(_id);
            setOrder([res.data]); 
        } catch (error) {
            console.log(error);
        }
    }
    

    const createOrder = async (order) => {
        const res = await postOrderreq(order);
        console.log(res);
    }

    const updateOrder = async (_id, order) => {
        try {
            await updateOrderreq(_id, order);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteOrder = async (_id) => {
        try {
            const res = await deleteOrderreq(_id);
            console.log(res);
            getOrders();
        } catch (error) {
            
        }
    }

    return (
        <OrderContext.Provider value={{
            orders,
            getOrders,
            deleteOrder,
            order,
            getOrder,
            createOrder,
            updateOrder

        }}>
            {children}
        </OrderContext.Provider>
    )
}