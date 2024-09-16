import { DataTypes } from "sequelize";
import db from "../connection.js";

const Karyawan = db.define(
    "Karyawan",
    {
        id_karyawan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jabatan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "karyawan"
    }
);

export default Karyawan;
