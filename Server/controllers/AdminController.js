const {Admin,Project} = require("../models/ProjectAdmin");

exports.getAllProjects = async (req,res)=>{
    try{
        const Projects = await Project.find();
        res.json(Projects);
    }catch(err){
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.addProject = async (req,res)=>{
    try{
        const {projectName,projectDesc} = req.body;

        const newProject = new Project({
            projectName,
            projectDesc
        });

        const savedSubject = await newProject.save();

        res.json(savedSubject);

    }catch(err){
        res.status(500).json({error: 'Internal server error'})
    }
}
