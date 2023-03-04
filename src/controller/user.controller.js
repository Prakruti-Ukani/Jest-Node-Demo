import mongoose from 'mongoose';
import user_model from '../model/user.model.js';
const user_data = user_model(mongoose);

const insert_data = async (req, res) => {
    const insert = new user_data({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const data = await insert.save();
    data ? res.send({ message: "data has been inserted", data }) : res.send("error in inserting a data");
};

const fetch_user = async (req, res) => {
    const user_data_result = await user_data.find();
    user_data_result.length ? res.send(user_data_result) : res.send({ message: "No data available to display" });
};

const update_user = async (req, res) => {
    const updated_result = await user_data.findByIdAndUpdate(req.query.id, req.body,{useFindAndModify:false,new:true});
    res.send({ message: 'data has been updateded', "new updated data": updated_result });
};

const delete_user = async (req, res) => {
    const deleted_data = await user_data.findByIdAndDelete(req.params.id);
    res.send({ message: 'data has been deleted sucessfully!', "deleted data": deleted_data });
};

export default{
    insert_data,
    fetch_user,
    update_user,
    delete_user
}