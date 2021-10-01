const router = require('express').Router();
const userRoutes = require('./userRoutes');
const saveRoutes = require('./saveRoutes');

router.use('/profile', userRoutes);
router.use('/saves', saveRoutes);

module.exports = router;