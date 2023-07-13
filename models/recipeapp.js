"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeApp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeApp.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: { args: [3], msg: "Title length is 3 at the minimum" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 500],
            msg: "Description length must be between 1 and 500 characters.",
          },
        },
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 1000],
            msg: "Ingredients length must be between 1 and 1000 characters.",
          },
        },
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 5000],
            msg: "Instructions length must be between 1 and 5000 characters.",
          },
        },
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "RecipeApp",
      tableName: "recipe_apps",
      undersocred: true,
    }
  );
  return RecipeApp;
};
