const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://khush28june:JQssaxSTkPb6HAfd@cluster0.3ccj2ip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}