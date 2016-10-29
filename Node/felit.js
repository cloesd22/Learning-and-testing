//creating buffers

var buf = new Buffer(10);

//creates a buffer of 10 values. The values are octets (Which are Bytes, 8 bits of information).

//arrays can also be used to create these

var buf2 = new Buffer([10,20,30,40,50]);

//notice how they are two digit numbers, thats because they are a byte in length.


//you can slo create one froma  string and encoding strangely enough

var buf3 = new Buffer("ay mr police man", "utf-8");


//writting to buffers is pretty easy sa well, there is a write function that takes in 4 stirng arguments.callee
//buf.write(string[,offeset][, length][, encoding]);

//the write function actually returns something; it returns the number of octets in the string.

//for example, we created a 10 octet buffer earlier, we can write to it.

buf.write("aymen das a gay police men");
console.log("octets written: " + buf);
