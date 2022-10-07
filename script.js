/*---------------Declarando as variaveis do programa-----------------------------------*/

let velocidade = parseInt(prompt("digite a velocidade desse veiculo km/h: "));
let km60 = 110 ;
let km70 = 120 ; // aqui declarei variaveis do preço da multa
let km80 = 130 ;
let km90 = 140 ;

/* o Uso do "parseInt" é uma boa pratica de programaçao pois quando colocamos o valor dentro do "promt" ele esta em 'string'
 e assim convertemos para number, mas é importante lembrar que o javaScript faz essa conversão sozinho */



/*---------------Estabelecendo as condiçoes para as minhas variaveis serem executadas-----------------------------------*/

if (velocidade < 59 && velocidade > 0){
 console.log(alert("Esse veiculo esta dentro do limite de velocidade e nao sera multado"));
}

/* essaa linha diz: se a minha variavel velocidade for menor que 59 e velocidade maior que 0 
  execute o "console.log". Dentro dele temos um "alert" mostrando uma mensagem que so sera executado 
  se as minhas duas condiçoes forem verdadeiras
*/

else if (velocidade <= 69 && velocidade >= 60) {     
    console.log(alert(`Esse veiculo devera ser multado em: ${km60}`));
}

// aqui temos uma repetiçao do 1 exemplo, mas aqui so sera executado se 69 for maior ou igual a velocidade e velocidade
// tem que ser maior ou igual a 60 para esecutar o programa dentro das chaves.

else if (velocidade <= 79 && velocidade >= 70) {
    console.log(alert(`Esse veiculo devera ser multado em: ${km70}`));
}

// aqui é um detalhe importante  sempre formos chamar uma varivael no console.log devemos usar ```no texto da maneira que eu fiz

else if (velocidade <= 89 && velocidade >= 80) {   
    console.log(alert(`Esse veiculo devera ser multado em: ${km80}`));
}


else if (velocidade >= 90) { 
    console.log(alert(`Esse veiculo devera ser multado em: ${km90}`));
}

// na programaçao else significa: caso nenhuma dessas condiçoes If e Else if forem verdadeiras  execute Else 

else{
    console.log(alert("erro"));
}
