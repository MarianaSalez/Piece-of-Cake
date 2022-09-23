const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    
    healthScore: {
      type: DataTypes.INTEGER,
      validate:{
        max: 100,                  
        min: 0,
        }
    },

    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    image:{
      type: DataTypes.STRING,
      validate:{
      isUrl: true
      }
    }




  });
};
