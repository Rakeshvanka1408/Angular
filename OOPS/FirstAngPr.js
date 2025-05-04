/*
    to populate dynamic string we can use ${variablename}

    ` `==> Mainly used for Multi Line String
*/
var frontend = 'Angular';
var backend = 'Java';
var database = 'sql';
var Fullstack = " ".concat(frontend, " <===> ").concat(backend, " <===> ").concat(database);
//console.log( "The fullstack contains:"+Fullstack);
var table_name = 'Employee';
var sal = 250000;
var query = "select * from ".concat(table_name, " where sal>20000");
console.log(query);
