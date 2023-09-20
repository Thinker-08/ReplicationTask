const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const dataTable = sequelize.define('dataTable', {
  baseUnit:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  quoteUnit:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  low: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  high: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    // defaultValue: 100
  },
  last: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  open: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  volume: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sell: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  buy: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  at: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
});
module.exports = {dataTable}