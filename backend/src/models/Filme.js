'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Filme = void 0;
const sequelize_1 = require('sequelize');
const database_1 = require('../config/database');
class Filme extends sequelize_1.Model {}
exports.Filme = Filme;
Filme.init(
  {
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: sequelize_1.DataTypes.STRING(150),
      allowNull: false,
    },
    genero: {
      type: sequelize_1.DataTypes.STRING(50),
      allowNull: false,
    },
    ano_lancamento: {
      type: sequelize_1.DataTypes.INTEGER,
      allowNull: false,
    },
    nota: {
      type: sequelize_1.DataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    disponibilidade_plataforma: {
      type: sequelize_1.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: database_1.sequelize,
    tableName: 'filmes',
    timestamps: true,
  },
);
