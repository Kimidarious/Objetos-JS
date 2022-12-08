/*Percorrer um objeto, no caso nosso objeto cliente, 
verificar se existe a chave dependente, se existir, enviar uma mensagem de oferta de seguro
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

function oferecerSeguro(obj) {
                                         //passamos o objeto que queremos trabalhar como parametro
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}
        `);        
    }
}
console.log(Object.entries(cliente))
oferecerSeguro(cliente)