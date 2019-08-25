/*function myphoto(size,quality,pixelvalue){
	this.size = size;
	this.quality = quality;
	this.pixelvalue = pixelvalue;
}

myphoto.prototype.consoled = function() {
	console.log(this.size)
};

let newphoto = new myphoto(4,5,4);
newphoto.consoled();*/

/*class Person{
	constructor(name,height,weight){
		this.name = name;
		this.height = height;
		this.weight = weight;
	}
}
class Photo extends Person{
	constructor(size,quality,pixelvalue){
		super();
		this.size = size;
		this.quality= quality;
		this.pixelvalue = pixelvalue;
	};

	
	

	console_source_of_image(){
		let new_src = document.getElementsByTagName('img');
		console.log(new_src); 
	}
}

myphoto = new Photo('Umang','6ft',70,'4*3',4/10,40);
/*new_src = document.getElementsByTagName('img');
myphoto.console_source_of_image();*/

/*let car = {
	brand:'Rolls And Royes',
	color:'Green',
	shape:'Awsome',
	wheels:4,

	displayinfo :function(){
		console.log(this.brand);
	}

};
car.brand = 'Rolles not Royes';
car.displayinfo();*/

const encodeed_uri = encodeURIComponent('geeks of geeks');
console.log(encodeed_uri);
const decoded_uri = decodeURIComponent(encodeed_uri);
console.log(decoded_uri);


// Objects are created
my_object = new Object();
my_object.name = 'Umang';
my_object.surname = 'Agrawal';
my_object.walk = function(){
	console.log(" I am walking");
}
my_object.walk();

let car = {
	brand:'Rolls And Royes',
	color:'Green',
	shape:'Awsome',
	wheels:4,

	displayinfo :function(){
		console.log(this.brand);
	}

};
car.brand = 'Rolles not Royes';
car.displayinfo();
my_object1 = Object.create(car);
my_object1.name ='Anurag';
my_object1.surname = 'Chapolia';
my_object1.dance = function(){
	console.log('I am dancing');
}

document.getElementsByClassName('btnclass').ClassName= '';


let bottle  = {
	height:10,
	diameter:5,
	amount_of_water:1,
	pouring_of_water:function(t,rate){
		this.amount_of_water = this.amount_of_water-(t*rate);
	}

}

bottle_new = Object.create(bottle);
console.log(bottle_new.height)

bottle_sealed = Object.seal(bottle);
console.log(Object.isSealed(bottle_sealed));
console.log(Object.isSealed(bottle_new));


bottle_freeze = Object.freeze(bottle);
console.log(Object.isFrozen(bottle_freeze))


function back(){
	history.back();
	//console.log(history.back());
}

function forward(){
	history.forward();
}


console.log(Object.values(bottle));
console.log(Object.keys(bottle));

const obj_bottle = Object.assign({},bottle);

console.log(obj_bottle.height)


const handler = {
	get:function(bottle,prop){
		if(prop=='area'){
			return bottle.height*bottle.diameter^2*3.14;
		}
	}
}

const bottle_with_area = new Proxy(bottle,handler);

console.log(bottle_with_area.area);

console.log(Object.is(1,1));
 console.log(Object.is(bottle_sealed,bottle));