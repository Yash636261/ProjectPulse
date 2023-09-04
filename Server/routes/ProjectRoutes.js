const {getAllProjects,addProject,updateProject} = require('../controllers/ProjectController');
const router = require('express').Router()

router.get('/allprojects',getAllProjects);
router.post('/addproject',addProject);
router.put('/updateproject/:_id',updateProject);

module.exports = router;