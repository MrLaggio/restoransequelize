import Pembayaran from "../models/Pembayaranmodel.js";

export const getAllPembayaran = async (req, res) => {
    try {
        const pembayaran = await Pembayaran.findAll();
        res.status(200).json(pembayaran);
    } catch (error) {
        console.error("Error in getAllPembayaran:", error);
        res.status(500).json({ error: error.message, message: "Terjadi kesalahan saat getAllPembayaran" });
    }
};

export const getPembayaranById = async (req, res) => {
    try {
        const { id } = req.params;
        const pembayaran = await Pembayaran.findByPk(id);
        if (!pembayaran) {
            return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
        }
        res.status(200).json(pembayaran);
    } catch (error) {
        console.error("Error in getPembayaranById:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createPembayaran = async (req, res) => {
    try {
        const { id_order, jumlah_bayar, tanggal_bayar, metode_pembayaran } = req.body;
        if (!id_order || !jumlah_bayar || !tanggal_bayar || !metode_pembayaran) {
            return res.status(400).json({ message: "Semua field harus diisi" });
        }
        const payment = await Pembayaran.create({ id_order, jumlah_bayar, tanggal_bayar, metode_pembayaran });
        res.status(201).json({
            message: "Pembayaran berhasil dibuat",
            data: payment
        });
    } catch (error) {
        console.error("Error in createPembayaran:", error);
        res.status(500).json({
            message: "Gagal membuat Pembayaran",
            error: error.message
        });
    }
};

export const updatePembayaran = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_order, jumlah_bayar, tanggal_bayar, metode_pembayaran } = req.body;
        const pembayaran = await Pembayaran.findByPk(id);
        if (!pembayaran) {
            return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
        }
        await pembayaran.update({ id_order, jumlah_bayar, tanggal_bayar, metode_pembayaran });
        res.status(200).json({ message: "Data berhasil diupdate", data: pembayaran });
    } catch (error) {
        console.error("Error in updatePembayaran:", error);
        res.status(500).json({ error: error.message, message: "Gagal mengupdate Pembayaran" });
    }
};

export const deletePembayaran = async (req, res) => {
    try {
        const { id } = req.params;
        const pembayaran = await Pembayaran.findByPk(id);
        if (!pembayaran) {
            return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
        }
        await pembayaran.destroy();
        res.status(200).json({ message: `Pembayaran dengan id ${id} berhasil dihapus` });
    } catch (error) {
        console.error("Error in deletePembayaran:", error);
        res.status(500).json({ error: error.message, message: "Gagal menghapus Pembayaran" });
    }
}