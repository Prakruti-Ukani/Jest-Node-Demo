
export default(mongoose) => {
    const project_schema = new mongoose.Schema({
        project_name: String,
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'category'
        }
    }, {
        timestamps: true,
        versionKey: false
    });
    return  mongoose.model('project', project_schema);
}

