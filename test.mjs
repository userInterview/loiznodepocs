//console.log("coucou à 01:09");
//import fetch from 'node-fetch';
//import {  Observable } from 'rxjs/Observable';
//import rxjs from 'rxjs' ;
console.log("Début");
import rxjs from 'rxjs/Rx' ;
import fetch from 'node-fetch';
console.log(process.versions);

/*try {
       var k = new Map();
       console.log("ES6 supported!!")
} catch (err) {
       console.log("ES6 not supported :(")
}

try {
       var k = new HashMap();
       console.log("ES100 supported!!")
} catch (err) {
       console.log("ES100 not supported :(")
}*/


/*import { rxjs } from  'rxjs';
import {fetch} from 'node-fetch';*/

/*const rxjs = require('rxjs/Rx');
const fetch = require('node-fetch');*/

//process.exit() ;


var fullTimeSync = function () {
       var currentdate = new Date();
       return (currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" +
              currentdate.getFullYear() + "-" + currentdate.getHours() + ":" +
              currentdate.getMinutes() + ":" + currentdate.getSeconds());
};


//pas exécuté si pas de souscription
const objObservable = new rxjs.Observable(observer => {
       //console.log('<fetchObs()> - 1. Dans le corps de l\'observable');
       fetch("http://desktop-bd63elf:89/LoizDatasBounchons/restDatas/CVE-2021-3114.json", { method: "GET" })
              .then(
                     function (res, rej) {
                            return (
                                   new Promise(
                                          function (resolve, reject) {
                                                 setTimeout(function () {
                                                        //console.log("<fetchObsAvecSequencesV2> - récupération 1");	
                                                        //observer.next("donnee brute "); 
                                                        resolve(res);
                                                        return res;
                                                 }, 5000);
                                          }
                                   )
                            );
                     })
              .then(async function (ressuiv) {

                     let valeur = await (new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                   let myval = ressuiv.json();
                                   resolve(myval);
                                   console.log("<fetchObsAvecSequencesV2> - récupération 2");
                            }, 5000)
                     }))
                            .then(function (resolved, reject) {
                                   //console.log("resolved",resolved) ;
                                   return resolved;
                            });
                     valeur = valeur.result;
                     //console.log("valeur",valeur) ; 
                     //observer.next(valeur);
                     return valeur;
              })
              .then(async function (datajsonified) {
                     //console.log("datajsonified - 844",datajsonified) ;
                     var retour = await (new Promise(function (resolve, rej) {
                            setTimeout(function () {
                                   //var res = resolve ;
                                   var res = datajsonified;
                                   delete res["CVE_Items"];
                                   var objJSonResult = [res];
                                   var objLoizHeure = { "loizheure - 3": fullTimeSync() };
                                   objJSonResult[objJSonResult.length] = objLoizHeure;
                                   resolve(objJSonResult);
                            }, 5000)
                     }))
                            .then(function (resolved, reject) {
                                   observer.next("<fetchObsAvecSequencesV2> - récupération 3");
                                   observer.next(resolved);
                                   return resolved;
                            });

                     console.log("retour - 859", retour);

                     return retour;
              }
              )
              .then(
                     function (resfour) {
                            console.log("resfour 864", resfour);
                            setTimeout(function () {

                                   console.log("resfour 867", resfour);
                                   var objLoizHeure = { "loizheure - 4": fullTimeSync() };
                                   //var res = [resfour] ;
                                   resfour[resfour.length] = objLoizHeure;
                                   //res.push(objLoizHeure); 
                                   observer.next(resfour);
                                   console.log("<fetchObsAvecSequencesV2> - récupération 4", resfour);
                                   observer.complete();
                            }, 5000);


                     });
});

//console.log('<fetchObs()> - 2. Pre Subscribe statement'); 

objObservable.subscribe(res => {
       console.log("<fetchObs()> - res vaut :", res);
       res;
       /*console.log('<fetchObs()> 3 -  dans le corps de la souscription - valeur à');
       console.log('\n\n');*/
});