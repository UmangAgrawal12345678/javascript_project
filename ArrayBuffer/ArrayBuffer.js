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

