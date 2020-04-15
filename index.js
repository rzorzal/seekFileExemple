const fs = require('fs');

const fd = fs.openSync("./test.txt", 'r'); //Retorna o identificar do File Descritor (Stream do arquivo em memória)

//configurações
const bufferSize = 210;
const offset = 0;
const length = bufferSize - offset;
const position = 40;

// Buffer que irá guardar a informação que estamos buscando
const singleBuffer = Buffer.alloc(bufferSize); //pode ser allocUnsafe ou allocUnsafeSlow


// Método de seek
const data = fs.readSync(fd, singleBuffer, {
  offset: offset,
  length: length,
  position: position
});

console.log('\n\nJust one buffer to read the file');
console.log(singleBuffer.toString('utf8'));

const multiBuffers = [
  Buffer.alloc(bufferSize/2 ),
  Buffer.alloc(bufferSize/2 )
]

fs.readvSync(fd, multiBuffers, position);

console.log('\n\nTwo buffers to read the file');
console.log(multiBuffers.map(a => a.toString('utf8')));
