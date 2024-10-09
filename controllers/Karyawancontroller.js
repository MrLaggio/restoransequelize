import Karyawan from "../models/karyawanmodel.js";

export const getAllKaryawan = async (req, res) => {
    try {
        const karyawan = await Karyawan.findAll();
        res.status(200).json(karyawan);
    } catch (error) {
        console.error("Error in getAllKaryawan:", error);
        res.status(500).json({ error: error.message, message: "Terjadi kesalahan saat getAllKaryawan" });
    }
};

export const getKaryawanById = async (req, res) => {
    try {
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: "Karyawan tidak ditemukan" });
        }
        res.status(200).json(karyawan);
    } catch (error) {
        console.error("Error in getKaryawanById:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil karyawan", error: error.message });
    }
};

export const createKaryawan = async (req, res) => {
    try {
        const { nama, jabatan } = req.body;
        if (!nama || !jabatan) {
            return res.status(400).json({ message: "Nama dan jabatan harus diisi" });
        }
        const karyawan = await Karyawan.create({ nama, jabatan });
        res.status(201).json({
            message: "Karyawan berhasil dibuat",
            data: karyawan
        });
    } catch (error) {
        console.error("Error in createKaryawan:", error);
        res.status(500).json({
            message: "Gagal membuat karyawan",
            error: error.message
        });
    }
};

export const updateKaryawan = async (req, res) => {
    try {
        const { nama, jabatan } = req.body;
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: "Karyawan tidak ditemukan" });
        }
        await karyawan.update({ nama, jabatan });
        res.status(200).json({
            message: "Data karyawan berhasil diupdate",
            data: karyawan
        });
    } catch (error) {
        console.error("Error in updateKaryawan:", error);
        res.status(500).json({ error: error.message, message: "Gagal mengupdate karyawan" });
    }
};

export const deleteKaryawan = async (req, res) => {
    try {
        const { id } = req.params;
        const karyawan = await Karyawan.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: "Karyawan tidak ditemukan" });
        }
        await karyawan.destroy();
        res.status(200).json({ message: `Karyawan dengan id ${id} berhasil dihapus` });
    } catch (error) {
        console.error("Error in deleteKaryawan:", error);
        res.status(500).json({ error: error.message, message: "Gagal menghapus karyawan" });
    }
};
