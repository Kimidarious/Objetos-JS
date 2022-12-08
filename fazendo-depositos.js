/* adicionar uma propriedade que permita ações, 
para que os clientes que estão cadastrados no sistema do nosso banco, consigam fazer operações bancárias, por exemplo, depositar, sacar, etc.
*/

const cliente = {
    nome: "Eliakim",
    idade: 33,
    cpf: "3850409726",
    email: "eliakim@email.com",
    fones: ["11975202640", "1126030458"],
    dependentes: [
        {
            nome: "Luiz Ardo",
            parentesco: "irmão",
            dataNasc: "03/01/2001" },
        {
            nome: "Rapha Rodrigues",
            parentesco: "irmã",
            dataNasc: "11/12/1992"
        }
    ],
    saldo:100,
    depositar:function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)