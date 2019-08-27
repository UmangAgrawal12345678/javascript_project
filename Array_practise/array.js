arr1 = [1,2,3,4,5];
console.log(arr1);
arr1.push(6);
console.log(arr1);
arr1.push([6,7]);
console.log(arr1);

arr1.pop();
console.log(arr1);
arr1.shift(7);
console.log(arr1);
arr1.unshift();
console.log(arr1);

arr1.sort();
arr1.sort(function(a,b){
	return (a-b)*(a+b)
})
console.log(arr1);

console.log(arr1.indexOf(3));
console.log(arr1.findIndex(function(a){
	return a==3;
}));

console.log(arr1.map(Math.sqrt));
arr2 = arr1.map(function(num){
	return num*2;
});
console.log(arr2);

console.log(arr1.every(function(num){
	return num>0;
}));

console.log(arr1.some(function(num){
	return num==1;
}));

console.log(arr1.join('&'));
console.log(arr1.toLocaleString(arr1));

console.log(arr1.lastIndexOf(5));
iter = arr1.entries();
console.log(iter.next());
console.log(iter.next());

/*iter2 = arr1.values();
console.log(iter2.next());
console.log(iter2.next());*/

console.log(arr1);

console.log(arr1.slice(2,3));
console.log(arr1.splice(2,3,1,2));

console.log(arr1);
function isEven(element,index,array){
	return (element%2)==0
}
console.log(arr1.find(isEven));
console.log(arr1.filter(isEven));

console.log(arr1.forEach(function(element){console.log(element)}));

console.log(Array.isArray(arr1));
console.log(arr1.reduceRight(function(previous,current){
	return previous*current
}));
console.log(arr1.fill(2,4,76));
console.log(arr1.toString());
console.log(arr1.concat(arr2));





