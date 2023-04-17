const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');
const isEmail = require('validator/lib/isEmail');
const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: path.resolve(__dirname, '..', 'sqlite', 'myBasa.db')
});

const PROTECTED_ATTRIBUTES = ['password']
class User extends Model {
   toJSON() {
      let attributes = Object.assign({}, this.get()) // hide protected fields
      for (let a of PROTECTED_ATTRIBUTES) {
         delete attributes[a]
      }
      return attributes
   }
}
User.init({
   user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 2,
      maxlength: 30,
   },
   patronymic: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 2,
      maxlength: 30,
   },
   surname: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 2,
      maxlength: 30,
   },
   role: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 2,
      maxlength: 30,
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
         validator: (v) => isEmail(v),
         message: 'Формат почты указан не верно',
      }
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
},
   {
      sequelize,
      modelName: 'user',
      createdAt: false,
      updatedAt: false
   })

module.exports = User;

