

var arr: Array<number> = [12,34,65,12,6,4];

arr.forEach(
    (Element,index)=>{
        console.log("The index is ",index," The element is :",arr[index])
    }
)

console.log('=======================================================')

var arr1 :Array<string> = ['Rakesh ','Root','stokes', 'Anderson'];

arr1.forEach(
    (Element,index)=>{
        console.log('The index is:',index,'The element is :',arr1[index]);
    }
)
console.log('=======================================================')

var a:any =[1,'Root',{bowler:'Bumrah'},765.9];

a.forEach(
    (Element,index)=>{
        console.log('The index is:',index,'Element is:',a[index])
    }
)