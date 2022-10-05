const { Model, DataTypes, Sequelize } = require("sequelize");

const Character_TABLE = 'Character';
const CharacterSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Age: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  Weight: {
    allowNull: true,
    type: DataTypes.FLOAT
  },
  History: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Character extends Model {
  static associate(models) {
    this.belongsToMany(models.movie, {
      as: 'MainCharacter',
      through: models.MovieCharacter,
      foreignKey: 'idCharacter',
      otherKey: 'idMovie'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: Character_TABLE,
      modelName: 'Character',
      timestamps: false
    }
  }
}

module.exports = { Character, CharacterSchema, Character_TABLE }
