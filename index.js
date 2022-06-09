const { getDecripita, getEncripita } = require("./crypt");
const fs = require('fs');

fs.readFile('./file.txt', 'utf-8', function (erro, dados) {
  if (erro) throw erro;

  const textoEncripitado = getEncripita(dados);
  console.log("Texto Encripitado => ", textoEncripitado);
  
  const textoDecripitado = getDecripita(textoEncripitado);
  console.log("Texto Decripitado => ", textoDecripitado);
});