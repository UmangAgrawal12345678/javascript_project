document.write('<p>Hi mom</p>');
function addpara(){
	let x = document.getElementById('name');
	alert("Tell me your name");

}
function Result(result){
	let x = document.getElementById('result')
	x.innerHTML = result;

}

function Add(Result){
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	/*console.log(Result);*/
	console.log(num1,num2);
	Result(num1+num2);
}

function Sub(){
	let num1 =document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	Result(num1-num2);
}
function Mul(){
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	Result(num1*num2);

}
function Div(){
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	Result(num1/num2);
}

function selectoperator(Result){
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	const a = document.getElementById('select1').value;
	console.log(a);
	let result = 0;
	switch (a)
	{
		case 'Add': result= num1+num2;
		break;
		case 'Sub':result = num1-num2;
		break;
		case 'Mul': result = num1*num2;
		break;
		case 'Div': result = num1/num2;
		break;



	}
	Result(result);
}

