
import Pemesanan from "../models/Pemesananmodel";

export const getAllPemesanan = async (req, res) => {
    try{
        const pemesanan = await Pemesanan.findAll();
        res.status(200).json(pemesanan)
    } catch(error){
        res.status(500).json({error: error.message, message: "terjadi kesalahan saat getAllPemesanan"})
    }
};

export const getPemesananById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pemesanan = await Pemesanan.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!pemesanan) {
            return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
        }
        res.status(200).json(pemesanan);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPemesanan = async (req, res) => {
    try {
        const { tanggal_pemesanan, status, total_harga } = req.body;
        const pemesanan = await Pemesanan.create({ tanggal_pemesanan, status, total_harga });
        res.status(201).json({
            message: "Pemesanan berhasil dibuat",
            data: pemesanan
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat pemesanan",
            error: error.message
        });
    }
};

export const updatePemesanan = async (req, res) => {
    try {
        const { tanggal_pemesanan, status, total_harga } = req.body
        const data = await Pemesanan.update({ tanggal_pemesanan, status, total_harga }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Pemesanan"})
    }

}


export const deletePemesanan = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pemesanan.destroy({where: {id: id}});
        res.status(200).json(` Pemesanan ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Pemesanan"})
    }
}
