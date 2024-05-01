import Router from "express";
import { createOrder, deleteOrder, getOrderById, getOrders } from "../controllers/orderController.js";

const router = Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrderById);
router.post("/orders", createOrder);
router.put("/orders/:id", deleteOrder);
router.delete("/orders/:id", deleteOrder);

export default router