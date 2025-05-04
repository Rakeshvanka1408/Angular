

/*
    Recursive => A function will be called again with in the same functionn
Factorial ==> 5! => 5* 4 * 3 * 2 * 1
*/
function factrorial (number){
if(number<=0){
    return 1;
}
else{
    return (number * factrorial(number -1));
}
}
console.log('factorial of 5 is ',factrorial(5))
console.log('---------------------------')
//optional Parameter ==> Syntax is to have??

function disp_details(name:string,salary: string, age?: number){
    console.log("Employee name ",name);
    console.log("Employee salary ",salary);
    if(age!= undefined ){
        console.log("Employee Age:", age)
    }
}
disp_details("vijay","2000",34);
console.log("---------------------------")
disp_details("rakesh","5999");

/*
REST parameter function ==> it should be declared with...
Always it should be last parameter in the list

*/
console.log("--------------------")
function addNumber (... nums: number[]){
    var i;
    var sum: number=0;
    for (i=0; i<nums.length; i++){
        sum = sum +nums[i];
        }
        console.log("Sum of Numbers is ===>", sum);

}

addNumber(1,2,24,45,35,);

/*
LAMBDA FUNCTION  ==> no function keyword
function (){
()=>
}
*/
var newmsg= ()=>{
    console.log("Welcomed to lambda function");
}
// newmsg();
var sumFunction = (x:number)=>{

    x = x+ 10;
    console.log(x);
}
sumFunction(20);