import Pembeli from "../models/pembelimodel.js";
import Pembayaran from "../models/Pembayaranmodel.js";
import Menu from "../models/Menumodel.js";
import Karyawan from "../models/karyawanmodel.js";
import Pemesanan from "../models/Pemesananmodel.js";


const createSeeder = async () => {
  // await clean();
  const pembeli = await Pembeli.create({
    nama: "Kass Kingston",
    no_telp: 6282989590969,
  });
  
  const karyawan = await Karyawan.create({
    nama: "Lorenzo Marino",
    jabatan: "manager",
  });
  const menu = await Menu.create({
    makanan: "mie ayam bangka",
    harga: 15,
  });
  const pemesanan = await Pemesanan.create({
    tanggal_pemesanan: 1999 - 12 - 30,
    status: "confirmed",
    total_harga: 15,
    id_pembeli: Pembeli.dataValues.id,
    id_menu: Menu.dataValues.id,
  });
  const pembayaran = await Pembayaran.create({
    tanggal_pembayaran: 1999 - 12 - 30,
    jumlah_pembayaran: 45,
    metode_pembayaran: "qris",
    id_pemesanan: Pemesanan.dataValues.id,
  });




  return { pembeli, pembayaran, menu, karyawan, pemesanan };
};

const pembeli = await createSeeder();

console.log(pembeli);