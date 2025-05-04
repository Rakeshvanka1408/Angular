var arr = [12, 34, 65, 12, 6, 4];
arr.forEach(function (Element, index) {
    console.log("The index is ", index, " The element is :", arr[index]);
});
console.log('=======================================================');
var arr1 = ['Rakesh ', 'Root', 'stokes', 'Anderson'];
arr1.forEach(function (Element, index) {
    console.log('The index is:', index, 'The element is :', arr1[index]);
});
console.log('=======================================================');
var a = [1, 'Root', { bowler: 'Bumrah' }, 765.9];
a.forEach(function (Element, index) {
    console.log('The index is:', index, 'Element is:', a[index]);
});
