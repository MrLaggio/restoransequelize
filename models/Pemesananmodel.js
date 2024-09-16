import { DataTypes } from "sequelize";
import db from "../connection.js";

const Pemesanan = db.define(
    "Pemesanan",
    {
        id_pemesanan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        tanggal_pemesanan: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        total_harga: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "pemesanan"
    }
);

export default Pemesanan;
