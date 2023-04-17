const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: path.resolve(__dirname, '..', 'sqlite', 'myBasa.db')
});

class Subordination extends Model {
}
Subordination.init({
   subordination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   },
   director: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: User,
         key: 'user_id'
      }
   },
   employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: User,
         key: 'user_id'
      }
   },
},
   {
      sequelize,
      modelName: 'subordination',
      createdAt: false,
      updatedAt: false
   })

module.exports = Subordination;