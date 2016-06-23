var os = require("os");

//endianness
console.log('endianness : ' + os.endianness());

//type
console.log('type : ' + os.type());

//platform
console.log('platform : ' + os.platform());

//totalmem
console.log('total memory : ' + os.totalmem() + " bytes.");

//freemem
console.log('free memory : ' + os.freemem() + " bytes.");

console.log ("Up Time : "+os.uptime()/60/60) + "saat";

console.log(	os.release());


const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('ZAMAN\n '+os.uptime()/60/60);
}).listen(8124);