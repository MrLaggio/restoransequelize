import Karyawan from "../models/karyawanmodel";

export const getAllKaryawan = async (req, res) => {
    try{
        const karyawan = await Karyawan.findAll();
        res.status(200).json(karyawan)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllKaryawan"})
    }
};

export const getKaryawanById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const karyawan = await Karyawan.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!karyawan) {
            return res.status(404).json({ message: "Karyawan not found lol" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createKaryawan = async (req, res) => {
    try {
        const { nama, jabatan } = req.body;
        const karyawan = await Karyawan.create({ nama, jabatan });
        res.status(201).json({
            message: "Karyawan berhasil dibuat",
            data: karyawan
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat karyawan",
            error: error.message
        });
    }
};

export const updateKaryawan = async (req, res) => {
    try {
        const { nama, jabatan } = req.body
        const data = await Karyawan.update({ nama, jabatan }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Karyawan"})
    }

}


export const deleteKaryawan = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Karyawan.destroy({where: {id: id}});
        res.status(200).json(` Karyawan ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Karyawan"})
    }
}
