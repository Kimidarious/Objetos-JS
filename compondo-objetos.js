const cliente = {
    nome: "André",
    idade:36,
    cpf: "12543652266",
    email: "andre@email.com"
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)