console.log("***************** Ligne 1 ******************** - " +fullTimeSync()) ; 
import rxjs from 'rxjs/Rx' ;
import fetch from 'node-fetch';

function fullTimeSync () {
    var currentdate = new Date();
    return (currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" +
           currentdate.getFullYear() + "-" + currentdate.getHours() + ":" +
           currentdate.getMinutes() + ":" + currentdate.getSeconds());
};

var body = null ; 
async function executer() {
const response = await fetch('https://github.com/');
body = await response.text();
console.log(body) ; 
} ; 

executer()