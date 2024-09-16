import Pembeli from "../models/pembelimodel";

export const getAllPembeli = async (req, res) => {
    try{
        const pembeli = await Pembeli.findAll();
        res.status(200).json(pembeli)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPembeli"})
    }
};

export const getPembeliById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pembeli = await Pembeli.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!pembeli) {
            return res.status(404).json({ message: "Pembeli tidak ditemukan" });
        }
        res.status(200).json(pembeli);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPembeli = async (req, res) => {
    try {
        const { nama, no_telp  } = req.body;
        const pembeli = await Pembeli.create({ nama, no_telp  });
        res.status(201).json({
            message: "Pembeli berhasil dibuat",
            data: pembeli
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat pembeli",
            error: error.message
        });
    }
};

export const updatePembeli = async (req, res) => {
    try {
        const { nama, no_telp } = req.body
        const data = await Pembeli.update({ nama, no_telp }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Pembeli"})
    }

}


export const deletePembeli = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pembeli.destroy({where: {id: id}});
        res.status(200).json(` Pembeli ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Pembeli"})
    }
}