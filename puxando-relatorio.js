/* percorrer o objeto e extrair informações básicas do cliente em um formato mais legível, no caso, legível aqui é para quem não vai ler o código.
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

let relatorio = "";
for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}
console.log(relatorio)