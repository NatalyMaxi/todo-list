const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '..', 'sqlite', 'myBasa.db')
});
const User = require('./user');
class Subordination extends Model {
}
Subordination.init({
  id: {
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

// Subordination.hasOne(User, { sourceKey: 'employee', foreignKey: 'user_id' });
Subordination.hasOne(User, { sourceKey: 'director', foreignKey: 'user_id', as: 'dir' });
Subordination.hasOne(User, { sourceKey: 'employee', foreignKey: 'user_id', as: 'emp' });

module.exports = Subordination;
