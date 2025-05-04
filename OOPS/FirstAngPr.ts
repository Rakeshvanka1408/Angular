
/*
    to populate dynamic string we can use ${variablename}

    ` `==> Mainly used for Multi Line String
*/
var frontend: String = 'Angular';
var backend : string ='Java';
var database : String ='sql';

var Fullstack =` ${frontend} <===> ${backend} <===> ${database}`
//console.log( "The fullstack contains:"+Fullstack);

var table_name = 'Employee';
var sal= 250000;

let query = `select * from ${table_name} where sal>20000`;
console.log("The query is ===>"+query);