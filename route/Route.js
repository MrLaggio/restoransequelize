
import express from "express"
import { createPembeli, deletePembeli, getAllPembeli, getPembeliById, updatePembeli } from "../controller/Pembelicontroller.js";
import { createPembayaran, deletePembayaran, getAllPembayaran, getPembayaranById, updatePembayaran } from "../controller/Pembayarancontroller.js";
import { createMenu, deleteMenu, getAllMenu, getMenuById, updateMenu } from "../controller/Menucontroller.js";
import { createPemesanan, deletePemesanan, getAllPemesanan, getPemesananById, updatePemesanan } from "../controller/Pemesanancontroller.js";
import { createKaryawan, deleteKaryawan, getAllKaryawan, getKaryawanById, updateKaryawan } from "../controller/Karyawancontroller.js";

const router = express.Router();

router.get("/pembeli", getAllPembeli);
router.get("/pembeli/:id", getPembeliById);
router.post("/createPembeli", createPembeli);
router.put("/updatePembeli/:id", updatePembeli);
router.delete("/deletePembeli/:id", deletePembeli);

router.get("/pembayaran", getAllPembayaran);
router.get("/pembayaran/:id", getPembayaranById);
router.post("/createPembayaran", createPembayaran);
router.put("/updatePembayaran/:id", updatePembayaran);
router.delete("/deletePembayaran/:id", deletePembayaran);

router.get("/menu", getAllMenu);
router.get("/menu/:id", getMenuById);
router.post("/createMenu", createMenu);
router.put("/updateMenu/:id", updateMenu);
router.delete("/deleteMenu/:id", deleteMenu);

router.get("/pemesanan", getAllPemesanan);
router.get("/pemesanan/:id", getPemesananById);
router.get("/createPemesanan", createPemesanan);
router.get("/updatePemesanan/:id", updatePemesanan);
router.get("/deletePemesanan/:id", deletePemesanan);

router.get("/karyawan", getAllKaryawan);
router.get("/karyawan/:id", getKaryawanById);
router.get("/createKaryawan", createKaryawan);
router.get("/updateKaryawan/:id", updateKaryawan);
router.get("/deleteKaryawan/:id", deleteKaryawan);

export default router;
