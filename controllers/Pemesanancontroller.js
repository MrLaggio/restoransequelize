import Pemesanan from "../models/Pemesananmodel.js";
import Pembeli from "../models/pembelimodel.js";

export const getAllPemesanan = async (req, res) => {
    try {
        const pemesanan = await Pemesanan.findAll({
            include: [{
                model: Pembeli,
                as: 'Pembeli'
            }]
        });
        if (pemesanan.length === 0) {
            return res.status(404).json({ message: "Tidak ada data pemesanan ditemukan" });
        }
        res.status(200).json(pemesanan);
    } catch (error) {
        console.error("Error in getAllPemesanan:", error);
        res.status(500).json({ error: error.message, message: "Terjadi kesalahan saat getAllPemesanan" });
    }
};

export const getPemesananById = async (req, res) => {
    try {
        const { id } = req.params;
        const pemesanan = await Pemesanan.findByPk(id, {
            include: [{
                model: Pembeli,
                as: 'Pembeli'
            }]
        });
        if (!pemesanan) {
            return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
        }
        res.status(200).json(pemesanan);
    } catch (error) {
        console.error("Error in getPemesananById:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createPemesanan = async (req, res) => {
    try {
        const { tanggal_pemesanan, status, total_harga, pembeli_id } = req.body;
        if (!tanggal_pemesanan || !status || !total_harga || !pembeli_id) {
            return res.status(400).json({ message: "Semua field harus diisi" });
        }
        const pemesanan = await Pemesanan.create({ tanggal_pemesanan, status, total_harga, pembeli_id });
        res.status(201).json({
            message: "Pemesanan berhasil dibuat",
            data: pemesanan
        });
    } catch (error) {
        console.error("Error in createPemesanan:", error);
        res.status(500).json({
            message: "Gagal membuat pemesanan",
            error: error.message
        });
    }
};

export const updatePemesanan = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggal_pemesanan, status, total_harga, pembeli_id } = req.body;
        const pemesanan = await Pemesanan.findByPk(id);
        if (!pemesanan) {
            return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
        }
        if (!tanggal_pemesanan && !status && !total_harga && !pembeli_id) {
            return res.status(400).json({ message: "Setidaknya satu field harus diisi untuk update" });
        }
        const updatedData = {};
        if (tanggal_pemesanan) updatedData.tanggal_pemesanan = tanggal_pemesanan;
        if (status) updatedData.status = status;
        if (total_harga) updatedData.total_harga = total_harga;
        if (pembeli_id) updatedData.pembeli_id = pembeli_id;
        await pemesanan.update(updatedData);
        res.status(200).json({ message: "Data berhasil diupdate", data: pemesanan });
    } catch (error) {
        console.error("Error in updatePemesanan:", error);
        res.status(500).json({ error: error.message, message: "Gagal mengupdate Pemesanan" });
    }
};

export const deletePemesanan = async (req, res) => {
    try {
        const { id } = req.params;
        const pemesanan = await Pemesanan.findByPk(id);
        if (!pemesanan) {
            return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
        }
        await pemesanan.destroy();
        res.status(200).json({ message: `Pemesanan dengan id ${id} berhasil dihapus` });
    } catch (error) {
        console.error("Error in deletePemesanan:", error);
        res.status(500).json({ error: error.message, message: "Gagal menghapus Pemesanan" });
    }
};
