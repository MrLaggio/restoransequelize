import Pembayaran from "../models/Pembayaranmodel";

export const getAllPembayaran = async (req, res) => {
    try{
        const pembayaran = await Pembayaran.findAll();
        res.status(200).json(pembayaran)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPembayaran"})
    }
};

export const getPembayaranById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pembayaran = await Pembayaran.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!pembayaran) {
            return res.status(404).json({ message: "pembayaran tidak ditemukan" });
        }
        res.status(200).json(pembayaran);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPembayaran = async (req, res) => {
    try {
        const { tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran } = req.body;
        const payment = await Pembayaran.create({ tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran });
        res.status(201).json({
            message: "Pembayaran berhasil dibuat",
            data: payment
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat Pembayaran",
            error: error.message
        });
    }
};

export const updatePembayaran = async (req, res) => {
    try {
        const { tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran } = req.body
        const data = await Pembayaran.update({ tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Pembayaran"})
    }

}


export const deletePembayaran = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pembayaran.destroy({where: {id: id}});
        res.status(200).json(` Pembayaran ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Pembayaran"})
    }
}