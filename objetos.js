var carro = new Object();

carro.modelo = 'Uno';
carro.ano = 1999;
carro.transmissao = 'CVT';


//exibe o objeto com os atributos e valores
//ex: { modelo: 'Uno', ano: 1999, transmissao: 'CVT' }

console.log(carro)

//lista todos os nomes dos atributos do projeto
console.log(Object.keys(carro))

//lista todos os nomes valores do array do projeto
console.log(Object.values(carro))