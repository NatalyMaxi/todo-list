const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: path.resolve(__dirname, '..', 'sqlite', 'myBasa.db')
});
const User = require('./user');

class Task extends Model {
}
Task.init({
   task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   },
   heading: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 2,
      maxlength: 60,
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 2,
      maxlength: 100,
   },
   priority: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   status: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   dateCreation: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   dateUpdate: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   deadline: {
      type: DataTypes.STRING,
      allowNull: false,
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
      modelName: 'task',
      createdAt: false,
      updatedAt: false
   })

Task.hasOne(User, { sourceKey: 'director', foreignKey: 'user_id', as: 'dir' });
Task.hasOne(User, { sourceKey: 'employee', foreignKey: 'user_id', as: 'emp' });

module.exports = Task;
