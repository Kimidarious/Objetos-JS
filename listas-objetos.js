//verificar a melhor forma de agregar informação de um novo dependente ao objeto cliente

const cliente = {
    nome: "Eliakim",
    idade: 33,
    cpf: "385097816",
    email: "eliakim@email.com",
    fones: ["11975203826", "1126030468"],
    dependentes: [{
        nome: "Luiz Ardo",
        parentesco: "irmão",
        dataNasc: "03/01/2001"
    }]
}

cliente.dependentes.push({
    nome: "Rapha Rodrigues",
    parentesco: "irmã",
    dataNasc: "11/12/1992"
})

// console.log(cliente)

const irmaomaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "03/01/2001")

console.log(irmaomaisNovo)
console.log(irmaomaisNovo[0].nome)