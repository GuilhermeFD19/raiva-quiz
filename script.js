/* Aula 20 MaiaQuiz  */
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "O que é zoonose ? ",
    alternativaA : "doença infecciosa transmitida de animais para humanos",
    alternativaB : "doença que causa tumor nos animais e humanos ",
    alternativaC : "doença transmissível  do homem para o animal ",
    alternativaD : "N.D.A",
    correta      : "doença transmissível  do homem para o animal",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Como é transmitido a raiva ?",
    alternativaA : "Sexo",
    alternativaB : "Mordida de animais infectados",
    alternativaC : "Saliva",
    alternativaD : "Espirro",
    correta      : "Mordida de animais infectados",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Como se previne a doença ?",
    alternativaA : "Matando animais de rua",
    alternativaB : "Vacinação",
    alternativaC : "Castração dos animais e injeção em humanos",
    alternativaD : "A raiva não é transmitida para humanos",
    correta      : "Vacinação",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "O que devo fazer quando entrar em contato com animais infectados com raiva ?",
    alternativaA : "Procurar o posto de saúde mais próximo",
    alternativaB : "Não precisa de atendimento após a mordida",
    alternativaC : "Nada, apenas esperar que os sintomas desaparecem",
    alternativaD : "N.D.A",
    correta      : "Procurar o posto de saúde mais próximo",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "O que a raiva acomete no nosso organismo?",
    alternativaA : "Sistema endócrino",
    alternativaB : "Sistema digestivo",
    alternativaC : "Sistema muscular",
    alternativaD : "Sistema nervoso central",
    correta      : "Sistema nervoso central",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o agente da raiva ?",
    alternativaA : "Vírus conhecido como CDV",
    alternativaB : "Vírus que pertence à família Retroviridae",
    alternativaC : "Vírus que pertence ao gênero Lyssavirus",
    alternativaD : "Vírus que pertence à família Herpesviridae",
    correta      : "Vírus que pertence ao gênero Lyssavirus",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Posso aproveitar a carne e o leite dos animais vacinados?",
    alternativaA : "Nao , tudo deve ser descartado corretamente",
    alternativaB : "Sim, a vacina não deixa resíduos na carne ou no leite",
    alternativaC : "Sim mas em apenas alguns casos onde o animal teve a doença ha mais de 2 anos",
    alternativaD : "Não , animais após a vacina não podem realizar as atividades normais",
    correta      : "Sim, a vacina não deixa resíduos na carne ou no leite",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Lado onde o sol se põe",
    alternativaB : "Lado onde o sol nasce",
    alternativaC : "Abaixo do Equador",
    alternativaD : "Acima do Equador",
    correta      : "Lado onde o sol se põe",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "Oceania",
    alternativaD : "América",
    correta      : "América",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA : "Belém",
    alternativaB : "São Luís",
    alternativaC : "Macapá",
    alternativaD : "Boa Vista",
    correta      : "Macapá",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Considerando a extensão territorial o Brasil é o ...",
    alternativaA : "3º maior",
    alternativaB : "2º maior",
    alternativaC : "4º maior",
    alternativaD : "5º maior",
    correta      : "5º maior",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}