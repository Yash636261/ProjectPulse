const {getAllProjects} = require('../controllers/AdminController');
const router = require('express').Router()

router.get('/allprojects',getAllProjects);

module.exports = router;