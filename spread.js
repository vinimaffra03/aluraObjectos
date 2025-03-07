const estudante = {
    npme: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999899888', '5511888889999'],
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

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

// Spread operator
exibirTelefones(...estudante.telefones);

const dadosDeEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
}

console.log(dadosDeEnvio);
