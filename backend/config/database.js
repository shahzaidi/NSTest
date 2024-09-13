const mongoose = require("mongoose");

const dbConnect = async()=>{
    

        const conn = await mongoose.connect(process.env.DB_URI);

        console.log(`Database connected successfully with ${conn.connection.host}`)
        
    
     
}

module.exports = dbConnect