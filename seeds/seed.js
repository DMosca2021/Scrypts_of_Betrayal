const sequelize = require('../config/connection');
const { User, Save } = require('../models');

const userData = require('./userData.json');
const saveData = require('./saveData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//  I dont think we need this -- do we need to seed the save game database?

    //   for (const project of saveData) {
    //     await Save.create({
    //       ...project,
    //       user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    //   }

  process.exit(0);
};

seedDatabase();
