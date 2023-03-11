"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_Time.init(
    {
      set_time_id_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: { type: DataTypes.INTEGER, allowNull: false },
      stage_id: { type: DataTypes.INTEGER, allowNull: false },
      start_time: { type: DataTypes.INTEGER, allowNull: false },
      end_time: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: "set_times",
      modelName: "Set_Time",
      timestamps: false,
    }
  );
  return Set_Time;
};
