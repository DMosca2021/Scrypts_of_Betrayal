const User = require('./User');
const Save = require('./saveGame');
// Double check routes!!!!!!!!!


User.hasMany(Save, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Save.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Save };
