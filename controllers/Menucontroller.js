import Menu from "../models/Menumodel.js";

export const getAllMenu = async (req, res) => {
    try {
        const menu = await Menu.findAll();
        res.status(200).json(menu);
    } catch (error) {
        console.error("Error in getAllMenu:", error);
        res.status(500).json({ error: error.message, message: "Terjadi kesalahan saat getAllMenu" });
    }
};

export const getMenuById = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await Menu.findByPk(id);
        if (!menu) {
            return res.status(404).json({ message: "Menu tidak ditemukan" });
        }
        res.status(200).json(menu);
    } catch (error) {
        console.error("Error in getMenuById:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil menu", error: error.message });
    }
};

export const createMenu = async (req, res) => {
    try {
        const { makanan, harga } = req.body;
        if (!makanan || !harga) {
            return res.status(400).json({ message: "Makanan dan harga harus diisi" });
        }
        const menu = await Menu.create({ makanan, harga });
        res.status(201).json({
            message: "Menu berhasil dibuat",
            data: menu
        });
    } catch (error) {
        console.error("Error in createMenu:", error);
        res.status(500).json({
            message: "Gagal membuat menu",
            error: error.message
        });
    }
};

export const updateMenu = async (req, res) => {
    try {
        const { makanan, harga } = req.body;
        const { id } = req.params;
        const menu = await Menu.findByPk(id);
        if (!menu) {
            return res.status(404).json({ message: "Menu tidak ditemukan" });
        }
        await menu.update({ makanan, harga });
        res.status(200).json({ message: "Menu berhasil diupdate", data: menu });
    } catch (error) {
        console.error("Error in updateMenu:", error);
        res.status(500).json({ error: error.message, message: "Gagal mengupdate Menu" });
    }
};

export const deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await Menu.findByPk(id);
        if (!menu) {
            return res.status(404).json({ message: "Menu tidak ditemukan" });
        }
        await menu.destroy();
        res.status(200).json({ message: `Menu dengan id ${id} berhasil dihapus` });
    } catch (error) {
        console.error("Error in deleteMenu:", error);
        res.status(500).json({ error: error.message, message: "Gagal menghapus Menu" });
    }
};
