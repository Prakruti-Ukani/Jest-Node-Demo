import mongoose from 'mongoose';
import category_model from '../model/category.model.js';
const category_data = category_model(mongoose);

const add_category = async (req, res) => {
    const insert = new category_data({
        category_name: req.body.category_name
    });

    const data = await insert.save();
    data ? res.send({ message: "data has been inserted", data }) : res.send("error in inserting a data");
};

export default{
    add_category
}