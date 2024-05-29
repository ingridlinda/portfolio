
// OBJETIVO - Qundo clicarmos na aba temos que mostra 
// o conteudo da aba que foi clicada e esconder o conteudo 
// da aba anterior.

//passo-1 dar um jeito de pegar os elementosque
//representam as abas anterior.

//passo-2 dar um jeito de indentificar o clique
//no elemento.

//passo-3 quando o usuario clicar, desmarcar
//a aba selecionada.

//passo-4 marcar a aba clicada como selecionada.

//passo-5 esconder o conteudo anterior.

//passo-6 mostrar o conteudo da aba selecionada.

//passo-1 dar um jeito de pegar os elementosque
//representam as abas anterior.
// console.log(document.querySelectorAll (".aba"));
const abas = document.querySelectorAll (".aba");
// console.log(abas);

//passo-2 dar um jeito de indentificar o clique
//no elemento.
abas.forEach(aba => {

    aba.addEventListener("click", function() {

        //passo-2 dar um jeito de indentificar o clique
        //no elemento
        if(aba.classList.contains("selecionada")){
            return
        }

        selecionarAba(aba)
        mostrarInformacao(aba)
        
        // console.log("Clicou na aba", aba);
       
    })

})

function selecionarAba(aba){



        //passo-3 quando o usuario clicar, desmarcar
        //a aba selecionada.
        const abaSelecionada = document.querySelector(".aba.selecionada")
        // console.log(abaSelecionada)
        abaSelecionada.classList.remove("selecionada");

        //passo-4 marcar a aba clicada como selecionada.
        aba.classList.add("selecionada");


}

function  mostrarInformacao(aba){

 //passo-5 esconder o conteudo anterior.
 const informacaoSelecionada = document.querySelector(".informacao.selecionada")
 //console.log(informcaoSelecionada)
 informacaoSelecionada.classList.remove("selecionada")

 //passo-6 mostrar o conteudo da aba selecionada.
 // console.log(aba.id)
 const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`
 // console.log(idDoElementoDaInformacaoDaAba) 

 const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba)
 informacaoASerMostrada.classList.add("selecionada")



}