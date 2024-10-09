
import express from "express"
import { createPembeli, deletePembeli, getAllPembeli, getPembeliById, updatePembeli } from "../controllers/Pembelicontroller.js";
import { createPembayaran, deletePembayaran, getAllPembayaran, getPembayaranById, updatePembayaran } from "../controllers/Pembayarancontroller.js";
import { createMenu, deleteMenu, getAllMenu, getMenuById, updateMenu } from "../controllers/Menucontroller.js";
import { createPemesanan, deletePemesanan, getAllPemesanan, getPemesananById, updatePemesanan } from "../controllers/Pemesanancontroller.js";
import { createKaryawan, deleteKaryawan, getAllKaryawan, getKaryawanById, updateKaryawan } from "../controllers/Karyawancontroller.js";

const router = express.Router();

router.get("/pembeli/find", getAllPembeli);
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
router.post("/createPemesanan", createPemesanan);
router.put("/updatePemesanan/:id", updatePemesanan);
router.delete("/deletePemesanan/:id", deletePemesanan);

router.get("/karyawan", getAllKaryawan);
router.get("/karyawan/:id", getKaryawanById);
router.post("/createKaryawan", createKaryawan);
router.put("/updateKaryawan/:id", updateKaryawan);
router.delete("/deleteKaryawan/:id", deleteKaryawan);

export default router;
