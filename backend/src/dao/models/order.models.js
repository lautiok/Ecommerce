import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orden: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    casa: {
        type: String,
    },
    codigopostal: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    contraentrega: {
        type: String,
    },
    transferencia: {
        type: String,
    },
    pedido: [orderItemSchema], 
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ["Pendiente", "pagado", "enviado"],
        default: "Pendiente"
    }
}, {
    timestamps: true
});

export default mongoose.model("Order", orderSchema);
