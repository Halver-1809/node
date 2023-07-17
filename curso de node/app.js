/* PRIMERA PARTEEEEEEEE!!!!!!!!!!
-----------------------------------------------------------------
const {SaludarHolaMundo, saludar} = require('./saludos.js');

console.log(SaludarHolaMundo());
console.log(saludar('frecodecamp'));
-----------------------------------------------------------------------------*/


/*SEGUNDA PARTEEEEE!!!!!!!!!!!!!!!
-------------------------------------------------------------

console.log('Hola, mundooooo');
console.warn('Ocurrio un error....');
console.error(new Error('¡ocurrioun error!'));
--------------------------------------------------------------------------------*/


/*TERCERAAAAAAAAA PARTEEEEE!!!!!!!!!!!!!!!
-------------------------------------------------------------*/
//console.log(process);
//console.log(process.env);
//console.log(process.argv[2]);
//console.log(process.argv[3]);

/*for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);  
}
console.log(process.memoryUsage());
*/

/*CUARTAAAAAAAAAAAAAAAAAAAAA PARTEEEEE!!!!!!!!!!!!!!!
-------------------------------------------------------------*/

/*//type:

const os = require('os');
console.log(os.type());

//homedir: Acceso al directorio principal del sistema

const os = require('os');
console.log(os.homedir());

//uptime:
const os = require('os');

console.log(os.uptime());

//userInfo
const os = require('os');

console.log(os.userInfo());*/


/*QUINTAAAAAAAAAAAAAAAA PARTEEEEE!!!!!!!!!!!!!!!
-------------------------------------------------------------
function sumar(a,b){
  console.log(`El resultado de la suma es:`,a+b);
}

setImmediate(sumar, 5, 6);

function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}
console.log('Antes de set immediate');

setImmediate(mostrarTema,'node.js');

console.log('Despues de set immediate');

function sumar(a,b){
  console.log(`Estoy aprendiendo:`,a+b);
}
setInterval(sumar, 1500,4,9);*/

/*SEXTAAAAAAAAAAAAAAAA PARTEEEEE!!!!!!!!!!!!!!!
-------------------------------------------------------------

const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err,contenido) => {
  if(err){
    console.log(err);
  } else{
    console.log(contenido);
  }
});

const fs = require('fs');

fs.appendFile('index.html', '<p>okkkkkkkkkkkkk</p>',(err)=> {
  if(err){
    throw err;
  }
  console.log('Archivo actualizado exitosamente');
});
const fs = require('fs');

fs.writeFile('index.html', '<p>contenido Nuevoooooo</p>',(err)=> {
  if(err){
    throw err;
  }
  console.log('Archivo actualizado exitosamente');
});
const fs = require('fs');
fs.unlink('main.html', (err)=> {
  if(err){
    throw err;
  }
  console.log('Archivo eliminado exitosamente');
})*/




