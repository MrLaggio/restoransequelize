import Pembeli from "../models/pembelimodel.js";

// Create (C)
export const createPembeli = async (req, res) => {
    try {
        const { nama, no_telp } = req.body;
        if (!nama || !no_telp) {
            return res.status(400).json({ message: "Nama dan nomor telepon harus diisi" });
        }
        const pembeli = await Pembeli.create({ nama, no_telp });
        res.status(201).json({
            message: "Pembeli berhasil dibuat",
            data: pembeli
        });
    } catch (error) {
        console.error("Error in createPembeli:", error);
        res.status(500).json({
            message: "Gagal membuat pembeli",
            error: error.message || "Internal server error"
        });
    }
};

// Read (R)
export const getAllPembeli = async (req, res) => {
    try {
        const pembeli = await Pembeli.findAll();
        if (pembeli.length === 0) {
            return res.status(404).json({ message: "Tidak ada data pembeli ditemukan" });
        }
        res.status(200).json(pembeli);
    } catch (error) {
        console.error("Error in getAllPembeli:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil data pembeli", error: error.message || "Internal server error" });
    }
};

export const getPembeliById = async (req, res) => {
    try {
        const { id } = req.params;
        const pembeli = await Pembeli.findByPk(id);
        if (!pembeli) {
            return res.status(404).json({ message: "Pembeli tidak ditemukan" });
        }
        res.status(200).json(pembeli);
    } catch (error) {
        console.error("Error in getPembeliById:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil data pembeli", error: error.message || "Internal server error" });
    }
};

// Update (U)
export const updatePembeli = async (req, res) => {
    try {
        const { nama, no_telp } = req.body;
        const { id } = req.params;
        const pembeli = await Pembeli.findByPk(id);
        if (!pembeli) {
            return res.status(404).json({ message: "Pembeli tidak ditemukan" });
        }
        if (!nama && !no_telp) {
            return res.status(400).json({ message: "Setidaknya satu field harus diisi untuk update" });
        }
        const updatedData = {};
        if (nama) updatedData.nama = nama;
        if (no_telp) updatedData.no_telp = no_telp;
        await pembeli.update(updatedData);
        res.status(200).json({ message: "Data berhasil diupdate", data: pembeli });
    } catch (error) {
        console.error("Error in updatePembeli:", error);
        res.status(500).json({ message: "Gagal mengupdate Pembeli", error: error.message || "Internal server error" });
    }
};

// Delete (D)
export const deletePembeli = async (req, res) => {
    try {
        const { id } = req.params;
        const pembeli = await Pembeli.findByPk(id);
        if (!pembeli) {
            return res.status(404).json({ message: "Pembeli tidak ditemukan" });
        }
        await pembeli.destroy();
        res.status(200).json({ message: `Pembeli dengan id ${id} berhasil dihapus` });
    } catch (error) {
        console.error("Error in deletePembeli:", error);
        res.status(500).json({ message: "Gagal menghapus Pembeli", error: error.message || "Internal server error" });
    }
};