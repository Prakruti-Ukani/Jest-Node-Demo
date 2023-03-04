import mongoose from 'mongoose';
import project_model from '../model/project.model.js';
const project_data = project_model(mongoose);

const add_project = async (req, res) => {
    const project = new project_data({
        project_name: req.body.project_name,
        category:req.body.category
    });
    const data = await project.save();
    data ? res.send({ message: "data has been inserted", data }) : res.send("error in inserting a data");
};

const show_projects = async(req,res) => {
    
    const projects = await project_data.find().populate('category','category_name');
    projects.length ? res.send(projects) : res.send({ message: "No data available to display" });
}

export default{
    add_project,
    show_projects
}