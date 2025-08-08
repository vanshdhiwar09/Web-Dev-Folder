const fs = require("fs");

// fs.writeFile("vansh.txt","Hello using the back end dev first time ",(err)=>{
//     if(err) throw err;
//     console.log("file created");
// });

fs.readFile("vansh.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})