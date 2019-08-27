/*
let object1 = {
	x:2,
	func = ()=>x*2,
	double:function(){
		setTimeout(this.func,1000);
		console.log(this.func)
	}
}

function func1(){
	setTimeout(function(){
		separate = object1.double;
		separate();
		binded = object1.double.bind(object1);
		binded();	
	},2000);
}

func1();*/


let about_me= escape('I am the best');
console.log(about_me);

console.log(unescape(about_me));

let func = function(){
	console.log('Geeks of Geeks');

};
/*
uneval_func = uneval(func);
console.log(eval(uneval_func));*/

console.log(parseInt("2018Geeksof Geks"));
console.log(parseFloat("2.15"));

string = 'Geeks of GEEKS is the best and I am a geek';
console.log(string.match(/geek/g));
console.log(string.match(/geek/i));
console.log(string.match(/geek/gi));

console.log(Date.parse('March 28,2017'));
//location.replace('https://www.geeksforgeeks.org/javascript-replace-method/');


my_map = new Map();
my_map.set(0,'I am the best');
my_map.set(1,'I can do anything');
my_map.set(2,'I can do everything and anything');

console.log(my_map.get(0));
console.log(my_map.get(1));

//console.log(my_map.erase(0));
console.log(my_map.delete(1));
console.log(my_map.get(0));
console.log(my_map.get(1));
console.log(my_map.clear());
console.log(my_map.size);

my_map.set(0,'What to do');
my_map.set(1,'What do I want');
my_map.set(2,'What is this');
console.log(my_map.has(0));

iter = my_map.entries();
console.log(iter.next());
console.log(iter.next());

let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
let arr3 = arr2.concat(arr1);
console.log(arr2);
console.log(arr3);
console.log(typeof arr1,typeof 2,typeof '3434');
console.log('1'===1);
console.log(1=='1');

function addition(a,b,...input){
	sum = a+b;
	for (var i = input.length - 1; i >= 0;i--) {
		sum = sum+input[i];
	};
	/*for (var i = input.length - 1; i >= 0; i--) {
		sum+=input[i]
	}*/
	return sum;
}


console.log(addition(1,2,3,4,5,6,7,8,9,10));

const new_add = (a,b)=>{
	return a+b;
}




