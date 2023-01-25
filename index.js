import prompt from "prompt-sync";

const lista = prompt()
const propriedadeCss = (entrada) => {
    let saida = []
    while (entrada != "sair") {
        saida.push(entrada);
        entrada = lista("Insira uma propriedade CSS:")
    }
    let resultado = saida.sort().join("\n")
    console.log(resultado)
    
}
propriedadeCss()
