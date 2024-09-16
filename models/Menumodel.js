import { DataTypes } from "sequelize";
import db from "../connection.js";

const Menu = db.define(
    "Menu",
    {
        id_menu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        makanan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        harga: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "menu"
    }
);

export default Menu;
