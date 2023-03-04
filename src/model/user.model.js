export default(mongoose) => {
    const user_schema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    }, {
        timestamps: true,
        versionKey: false
    });
    return  mongoose.model('user', user_schema);
}

