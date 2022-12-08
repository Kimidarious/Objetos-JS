// const fichaGuerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro"
//    }
const classes = {
    const mago = {
        nome: "Gandalf",
        classe: "mago"
    },
    
    const guerreiro = {
        nome: "Aragorn",
        classe: "guerreiro"
    },
    
    const ranger = {
        nome: "Legolas",
        classe: "ranger"
    }
}
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

    const personagens = { ...mago, ...guerreiro, ...ranger }
    console.log(personagens)