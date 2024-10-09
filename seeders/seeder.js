import Pembeli from "../models/pembelimodel.js";
import Pembayaran from "../models/Pembayaranmodel.js";
import Menu from "../models/Menumodel.js";
import Karyawan from "../models/karyawanmodel.js";
import Pemesanan from "../models/Pemesananmodel.js";

const createSeeder = async () => {
  try {
    // Create Pembeli
    const pembeli = await Pembeli.create({
      nama: "Kass Kingston",
      no_telp: "6282989590969",
    });

    // Create Karyawan
    const karyawan = await Karyawan.create({
      nama: "Lorenzo Marino",
      jabatan: "manager",
    });

    // Create Menu
    const menu = await Menu.create({
      makanan: "mie ayam bangka",
      harga: 15000, // Assuming the price is in cents or the smallest currency unit
    });

    // Create Pemesanan
    const pemesanan = await Pemesanan.create({
      tanggal_pemesanan: new Date("1999-12-30"),
      status: "confirmed",
      total_harga: 15000,
      id_pembeli: pembeli.id,
      id_menu: menu.id,
      id_karyawan: karyawan.id,
    });

    // Create Pembayaran
    const pembayaran = await Pembayaran.create({
      tanggal_pembayaran: new Date("1999-12-30"),
      jumlah_pembayaran: 15000,
      metode_pembayaran: "qris",
      id_pemesanan: pemesanan.id,
    });

    return { pembeli, karyawan, menu, pemesanan, pembayaran };
  } catch (error) {
    console.error("Error in createSeeder:", error);
    throw error;
  }
};

const seedData = async () => {
  try {
    const result = await createSeeder();
    console.log("Seeding completed successfully:", result);
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

seedData();