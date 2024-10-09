import db from "../connection.js";
import Karyawan from "./karyawanmodel.js";
import Menu from "./Menumodel.js";
import Pembayaran from "./Pembayaranmodel.js";
import Pembeli from "./pembelimodel.js";
import Pemesanan from "./Pemesananmodel.js";


Pembeli.hasMany(Pemesanan, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  
  Menu.hasMany(Pemesanan, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  
  Karyawan.hasMany(Pemesanan, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  
  Pemesanan.hasOne(Pembayaran, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  
  Pemesanan.belongsTo(Pembeli, {
    foreignKey: "id_pembeli",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
    
  Pemesanan.belongsTo(Karyawan, {
    foreignKey: "id_karyawan",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  
  Pemesanan.hasOne(Pembayaran, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  
  Pembayaran.belongsTo(Pemesanan, {
    foreignKey: "id_pemesanan",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  
  await db.sync();