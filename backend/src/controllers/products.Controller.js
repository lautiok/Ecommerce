import Products from '../dao/models/products.models.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        if (!products) {
            res.status(404).json({ error: 'No se encontraron productos' });
        }
        res.json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
        res.json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { id,  name, description, price, img, stock, category, gender } = req.body;
        const newProduct = new Products({ id, name, description, price, img, stock, category, gender });
        await newProduct.save();
        res.json(newProduct)
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
       const { name, description, price, img, stock, category, gender } = req.body;
       const productUpdated = await Products.findByIdAndUpdate(
        { _id: req.params.id },
        { name, description, price, img, stock, category, gender },
        { new: true }
        )
        res.json(productUpdated)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
        res.status(200).json(product);
    } catch (error) {
        
    }
}
