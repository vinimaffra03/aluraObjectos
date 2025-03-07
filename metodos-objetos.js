const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }] 
}

// criando um array com as chaves do objeto estudante
const chavesObjetos = Object.keys(estudante);
console.log(chavesObjetos);


// verificando se no array possui o objeto enderecos , se nao possuir exibir uma mensagem de erro
if (!chavesObjetos.includes('enderecos')) {
    console.error('e necessario possuir o endereco');
}


// no metodos valures ele se o objeto possui um array de objeto ele ira retornar o valor do array sendo os objetos dentro do array
const valoresEstudante = Object.values(estudante);
console.log(valoresEstudante);

// imprimindo ambos chaves e valores 
const totaisEstudante = Object.entries(estudante.enderecos);
console.log(totaisEstudante);

// copiando um objeto para outro objeto com assign
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }


