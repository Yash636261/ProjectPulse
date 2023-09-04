const {Admin,Project} = require("../models/ProjectAdmin");

exports.getAllProjects = async (req,res)=>{
    try{
        const Projects = await Project.find();
        res.json(Projects);

    }catch(err){
        res.status(500).json({error: 'Internal server error'});
    }
}