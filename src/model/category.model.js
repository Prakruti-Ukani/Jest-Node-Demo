export default(mongoose) => {
    const category_schema = new mongoose.Schema({
        category_name: String
    }, {
        timestamps: true,
        versionKey: false
    });
    return  mongoose.model('category', category_schema);
}

