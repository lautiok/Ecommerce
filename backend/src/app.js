import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productsRoutes from "./routes/Products.Routes.js";
import orderRoutes from "./routes/Orders.Routes.js";
import authRoutes from "./routes/Auth.routes.js";
import { connectDB } from "./dao/db.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
dotenv.config();

const app = express();
const port = process.env.PORT;

//middlewares
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));


//routes
app.use("/api", productsRoutes);
app.use("/api", orderRoutes);
app.use("/api/auth", authRoutes);



app.listen (port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})


//mongoose connection
connectDB()



