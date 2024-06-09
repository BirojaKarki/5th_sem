var xyz=["Banana", "Orange", "Apple", "Mango"];

console.log("The length of the string is:",xyz.length);
// Convert an array  to string
console.log(" convert the string into number",xyz.toString());
//introduced the array method at()
console.log(xyz.at(2));
//join array elements

console.log("joining the array elements:",xyz.join("*"));
//pop(),removes the last element  from an array
console.log("the removed element is",xyz.pop());
//push (),add new element at the end
xyz.push("kiwi");
console.log("the added element is",xyz);
//shift(),removes the first array element
console.log("The removed first element is",xyz.shift());
//unshift ,add new element at first 
xyz.unshift("strawberry");
console.log("the added element is ",xyz);
// concate the two string
var wxy=["Emil", "Tobias", "Linus"];
 arr1=xyz.concat( wxy);
console.log("the added element is ",arr1);
