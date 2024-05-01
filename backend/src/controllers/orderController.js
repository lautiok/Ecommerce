import Order from "../dao/models/order.models.js";
import nodemailer from "nodemailer";
import Twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();
export const getOrders = async (req, res) => {
  try {
    const order = await Order.find();
    if (!order) {
      res.status(404).json({ error: "No se encontraron pedidos" });
    }
    res.json(order);
  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ error: "No se encontro el pedido" });
    }
    res.json(order);
  } catch (error) {}
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASSWORD_GMAIL,
  },
});

export const createOrder = async (req, res) => {
  try {
    const {
      orden,
      name,
      apellido,
      email,
      direccion,
      casa,
      codigopostal,
      ciudad,
      provincia,
      phone,
      contraentrega,
      transferencia,
      pedido,
      total,
      estado,
    } = req.body;
    const pedidoItems = pedido.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    // Creas la nueva orden con el array de objetos de pedido
    const newOrder = new Order({
      orden,
      name,
      apellido,
      email,
      direccion,
      casa,
      codigopostal,
      ciudad,
      provincia,
      phone,
      contraentrega,
      transferencia,
      pedido: pedidoItems, // Usas el array de objetos de pedido construido arriba
      total,
      estado,
    });

    // Guardas la nueva orden en la base de datos
    await newOrder.save();

    let mailOptions; // Define mailOptions fuera del bloque if

    //Logica para crear el mail segun la forma de pago
    if (transferencia) {
      mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Confirmación de orden",
        text: `
        Estimado ${name} ${apellido},

        Gracias por elegir Motocycle! Nos complace confirmar que tu orden con el número ${
          newOrder.orden
        } ha sido recibida y está siendo procesada.

        Detalles de la orden:
        
        • Número de orden: ${newOrder.orden}
        • Productos: ${pedidoItems.map((item) => item.name).join(", ")}
        • Total: $${newOrder.total}
        
        Para completar tu compra, por favor realiza el pago total de $${newOrder.total} a la siguiente cuenta bancaria:

        Cuenta bancaria:
        
        Nombre del titular: Juan Perez
        CUIT: 123456789
        Nombre del banco: Naranja S.A.
        Número de cuenta: 123456789
        CBU: 12323456789123456789

        Una vez realizado el pago, no olvides enviar el comprobante de tu transferencia al número de WhatsApp: 1194430932.

        ¡Gracias nuevamente por tu compra! Esperamos con ansias poder servirte nuevamente en el futuro.
        `,
      };
    } else if (contraentrega) {
      mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Confirmación de tu orden en Motocycle",
        text: `
                Estimado ${name} ${apellido},

                Gracias por elegir Motocycle! Nos complace confirmar que tu orden con el número ${
                  newOrder.orden
                } ha sido recibida y está siendo procesada.

                Detalles de la orden:
                
                • Número de orden: ${newOrder.orden}
                • Productos: ${pedidoItems.map((item) => item.name).join(", ")}
                • Total: $${newOrder.total}
                
             ¡No olvides que tendra que pagar el total de $${newOrder.total} al momento de recibir su pedido.

                ¡Gracias nuevamente por tu compra! Esperamos con ansias poder servirte nuevamente en el futuro.
                `,
      };
    }

    // Enviar correo electrónico si mailOptions está definido
    if (mailOptions) {
      await transporter.sendMail(mailOptions);
      console.log("Correo enviado");
    }

    // Enviar SMS
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = Twilio(accountSid, authToken);

    const message = await client.messages.create({
      body: `¡Hola, ${name} ${apellido} ha realizado un pedido con el número ${newOrder.orden}!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.PHONE_NUMBER,
    });

    console.log(message);

    res.json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear la orden" });
  }
};

export const updateOrder = async (req, res) => {
   try {
      const { name, apellido, email, direccion, casa, codigopostal, ciudad, provincia, phone, contraentrega, transferencia, pedido, total, estado } = req.body;
      const orderUpdated = await Order.findByIdAndUpdate(
        { _id: req.params.id },
        { name, apellido, email, direccion, casa, codigopostal, ciudad, provincia, phone, contraentrega, transferencia, pedido, total, estado },
        { new: true }
      )
      res.json(orderUpdated)
    } catch (error) {
        return res.status(500).json({ error: error.message })
   }
}

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      res.status(404).json({ error: "No se encontro el pedido" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};
