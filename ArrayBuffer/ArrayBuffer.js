// Buffer creation
let buffer = new ArrayBuffer(32);

// Dataview object to view and manipulate the buffer
let view = new DataView(buffer);

//typed array of length 8 to view and manipulate the buffer
view1 = new Int8Array(buffer);

view.setInt32(0,0x45755221);

document.write(view.getInt32(0).toString(16));
console.log(view.getInt8(0));
console.log(view1[0])

console.log(buffer.byteLength);
console.log(ArrayBuffer.isView(view));

let buffer1 = new ArrayBuffer(16);

let new_view = new Uint32Array(buffer1);

new_view[0] = 30;
console.log(new_view[0]);

let view_newbuffer = new Uint32Array(buffer1.slice(0,8));

console.log(view_newbuffer[0]);
console.log(view_newbuffer);


// Typed array functions

let bf1 = new ArrayBuffer(32);

vw1= new Int8Array(bf1);
vw2 = new Int32Array(bf1);
vw3 = new Int16Array(bf1);

console.log(vw1.byteLength);
console.log(vw1.length);
console.log(vw1.name);
console.log(vw1.BYTES_PER_ELEMENT);
console.log(vw2.BYTES_PER_ELEMENT);

vw4 = Int16Array.of(1,2,3,4,5,6,7);
console.log(vw4);
vw5 = Int32Array.from([2,3,4,5,6,7]);
vw6 = Int16Array.from(new Set([2,3,4,5,6]));
console.log(vw5);
//console.log(vw6);

vw7 = vw4.entries();
vw8 = vw4.map((element)=> element*2);
console.log(vw7,'\n',vw8);
console.log(vw4.every((element)=>element>0));
console.log(vw4.some((element)=>element%2==0));
console.log(vw4.filter((element)=>element%2==0));
console.log(vw4.reduce((previous,curent)=>previous*curent));
console.log(vw4.slice(3,5));
console.log(vw4.subarray(3,5));

console.log(vw1.find((element)=>element%2==0));
console.log(vw1.findIndex((element)=>element%2==0));
console.log(vw1.reduceRight((previous,current)=>previous*current));
console.log(Int16Array[Symbol.species]);
iter1= vw1.keys();
iter2 = vw1.values();
console.log(iter1.next());
console.log(iter2.next());

vw9 = new Int16Array(bf1,4);
console.log(vw9.byteOffset);

iter3= vw1[Symbol.iterator]();
console.log(iter3.next().value);

console.log(vw1.toString());
console.log(vw1.join('me'));



