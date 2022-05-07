import Sequelize from 'sequelize';
import {connection} from '../database/connection.js'

export const animes = connection.define('animes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    temporadas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    episodios: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lancamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sinopse: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false 
});

// function initTable() {
//     animes.async()
// }

// initTable()