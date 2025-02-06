const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco : [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
      }]
  }

estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '284',
    complemento: ''
})

console.log(estudante.endereco);
console.log(estudante.endereco[0].rua);
console.log(estudante.endereco[1].rua);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);
// const que separa lista dos enderecos com complemento usando filter para no array endereco buscar um endereco cujo complemento retorne truthy

console.log(listaEnderecosComComplemento);