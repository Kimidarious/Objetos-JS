// const Livro = function (nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function () {
//         return gNome
//     }
//     this.getEditora = function () {
//         return gEditora
//     }
//     this.getPaginas = function () {
//         return gPaginas
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143)

// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

// //prototype

// const nome = "Alura"

// // const temp = new String(nome)
// // console.log(temp.toString())

///////////////////////////////////

class Livro{
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

// console.log(typeof Livro)

// classes são açucares sintáticos
//classes não são hoisted/içadas ou seja, não jogadas lá para cima

class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()
