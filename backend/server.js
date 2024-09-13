const app = require("./app");
const dotenv = require("dotenv");
const dbConnect = require("./config/database");

dotenv.config({path: "config/config.env"})

// Handling uncought Exception

process.on("uncaughtException", (err )=>{
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down the server due to Uncought Exception`);
     process.exit(1);
});




const PORT = process.env.PORT || 4000

dbConnect()

const server = app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});




// Unhandled Promise Rejection

process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)
                                                           vb
    server.close(()=>{
        process.exit(1)
    });

})