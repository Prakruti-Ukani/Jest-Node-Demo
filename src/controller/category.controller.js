import mongoose from 'mongoose';
import category_model from '../model/category.model.js';
const category_data = category_model(mongoose);

const add_category = async (req, res) => {
    const insert = new category_data({
        category_name: req.body.category_name
    });
<<<<<<< HEAD
    
=======

>>>>>>> e9dbd0764a9cabd8af8e2fab92ed7d5f8545c94a
    const data = await insert.save();
    data ? res.send({ message: "data has been inserted", data }) : res.send("error in inserting a data");
};

export default{
    add_category
}