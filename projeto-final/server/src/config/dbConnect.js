import mongoose, {mongo} from "mongoose";

async function connect(){
    mongoose.connect("mongodb://localhost:27017");
    return mongoose.connection;
}

export default connect;