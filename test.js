
console.log("Début");
import prompt from 'prompt';
/*
var valLoizasync = await (new Promise(
       function (resolved, reject){
              prompt.start();
              prompt.get(['username', 'email'], function (err, result) {
                     console.log('Command-line input received:');
                     console.log('  username: ' + result.username);
                     console.log('  email: ' + result.email);
                     resolved(result.username + " : " + result.email);                     
              })
       }
)).then(function(resolved, reject) {      
       return resolved ;
})  ;  ;

console.log("terminé : " + valLoizasync );
*/
try {
       var k = new Map();
       console.log("new Map() possible : ES6 semble actif.") ;
} catch (err) {
       console.log("new Map() impossible : ES6 semble inactif.")
}

try {
       var k = new HashMap();
       console.log("new HashMap() possible : ES100 semble actif.")
} catch (err) {
       console.log("new HashMap() impossible : ES100 semble inactif.")
}
console.log("terminé");

