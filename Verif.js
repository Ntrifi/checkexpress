let day = new Date().getDay()
let hours = new Date().getHours()

const fs = require('fs');

console.log(day);
console.log(hours);

function Verif(req,res, next){
    if (day>0 && day<6 && hours>9 && hours<18)
    {next();}
    else
    fs.readFile('./Public/error.html','utf8',(err,data)=>{
    err?res.end('file not found')&& console.error(err):
    res.end(data);
});

}
module.exports = Verif