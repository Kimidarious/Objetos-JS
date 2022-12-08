/*extrair de uma listagem de clientes apenas as informações de dependentes
 e aí montamos uma lista única com esses dependentes para análise de outros departamentos do banco
 */

 const clientes = [
    {
        nome: "Eliakim",
        cpf: "3850409726",
        dependentes: [{            
          nome: "Luiz Ardo",
          parentesco: "irmão",
          dataNasc: "03/01/2001" 
         }, 
        {
          nome: "Rapha Rodrigues",
          parentesco: "irmã",
          dataNasc: "11/12/1992"
     }],
},
{
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
    }]
 }
]

 const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

 console.table(listaDependentes)