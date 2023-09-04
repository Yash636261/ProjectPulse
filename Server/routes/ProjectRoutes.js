const {getAllProjects,addProject} = require('../controllers/AdminController');
const router = require('express').Router()

router.get('/allprojects',getAllProjects);
router.post('/addproject',addProject);

module.exports = router;