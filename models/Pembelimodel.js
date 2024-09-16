import { DataTypes } from "sequelize";
import db from "../connection.js";

const Pembeli = db.define(
    "Pembeli",
    {
        id_pembeli: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_telp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "pembeli"
    }
);

export default Pembeli;
