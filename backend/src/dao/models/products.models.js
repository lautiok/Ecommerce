import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true  
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        url : String,
        public_id : String
    },
    stock:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Product", productSchema)