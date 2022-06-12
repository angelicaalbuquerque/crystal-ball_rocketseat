/* 
Quais são os meus passos?
- Definir quais são as minhas variáveis
- Definir quais são meus dados de entrada
- Definir quais são meus dados de saída

 1 - Ver quantidade de respostas;
 2 - Gerar número aleatório;
 3 - Tornar botão funcional;
 4 - Fazer a resposta aparecer em tela;
 5 - Pegar o input da pergunta e fazer aparecer em tela;
 */

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

//pesquisando a resposta e a pergunta pelo seletor
const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");

//clicar em fazer pergunta e executar pedaço de código
function fazerPergunta() {
  if (inputPergunta.value === "") {
    alert("Você não digitou a pergunta");
    return;
    //toda função que encontra return para imediatamente
  }

  //mostrar pergunta em tela
  const pergunta = "<div>" + inputPergunta.value + "</div>";

  //gerar número aleatório e mostrar resposta
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  console.log(respostas[numeroAleatorio]);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
}
