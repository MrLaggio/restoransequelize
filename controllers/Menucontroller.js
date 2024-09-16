
import Menu from "../models/Menumodel";

export const getAllMenu = async (req, res) => {
    try{
        const menu = await Menu.findAll();
        res.status(200).json(menu)
    } catch(error){
        res.status(500).json({error: error.message, message: "terjadi kesalahan saat getAllMenu"})
    }
};

export const getMenuById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const menu = await Menu.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!menu) {
            return res.status(404).json({ message: "Menu tidak ditemukan" });
        }
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createMenu = async (req, res) => {
    try {
        const { makanan, harga } = req.body;
        const pemesanan = await Menu.create({ makanan, harga });
        res.status(201).json({
            message: "Menu berhasil dibuat",
            data: pemesanan
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat menu",
            error: error.message
        });
    }
};

export const updateMenu = async (req, res) => {
    try {
        const { makanan, harga } = req.body
        const data = await Menu.update({ makanan, harga }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Menu"})
    }

}


export const deleteMenu = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Menu.destroy({where: {id: id}});
        res.status(200).json(` Menu ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Menu"})
    }
}
