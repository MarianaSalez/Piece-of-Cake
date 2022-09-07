const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary: {
      type: DataTypes.STRING(1500),
      allowNull: false,
    },

    healthScore: {
      type: DataTypes.FLOAT,
    },

    steps: {
      type: DataTypes.STRING,
    },

    image:{
      type: DataTypes.STRING,
      validate:{
      isUrl: true
      }
    }




  });
};
