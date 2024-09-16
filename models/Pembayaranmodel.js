import { DataTypes } from "sequelize";
import db from "../connection.js";

const Pembayaran = db.define(
    "Pembayaran",
    {
        id_pembayaran: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tanggal_pembayaran: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        jumlah_pembayaran: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        metode_pembayaran: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "pembayaran"
    }
);

export default Pembayaran;
