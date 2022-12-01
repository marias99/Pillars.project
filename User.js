const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  // Add your Sequelize fields here

});

const student =  sequelize.define('name', {name: DataTypes.STRING})
const teacher = sequelize.define('name',{name: DataTypes.STRING})

teacher.hasMany(students, {})

var names = sequelize.define('name', {
  id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
  },
  count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: true,
  }
},
{
  indexes: [
      {
          unique: true,
          fields: ['mentor_id', 'count', 'name']
      }
  ]
});


/**
 * We've created the association for you!
 *
 * A user can be related to another user as a mentor:
 *       SALLY (mentor)
 *         |
 *       /   \
 *     MOE   WANDA
 * (mentee)  (mentee)
 *
 * You can find the mentor of a user by the mentorId field
 * In Sequelize, you can also use the magic method getMentor()
 * You can find a user's mentees with the magic method getMentees()
 */

User.belongsTo(User, { as: 'mentor' });
User.hasMany(User, { as: 'mentees', foreignKey: 'mentorId' });

module.exports = User;
