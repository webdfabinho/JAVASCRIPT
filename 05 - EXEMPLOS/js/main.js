
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado Por Clicar!</b>";
    console.log(document.getElementById("agradecimento"));

   //alert("Obrigado Por Clicar!!!");
}

function redirecionar(){
    window.open("https://paivasolucoes.com.br/");
    //window.location.href = "https://paivasolucoes.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Parabéns!!! Você Alterou o Texto!";
    elemento.innerHTML = "Parabéns!!! Você Alterou o Texto!";
     //alert("Trocar Texto!")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse!";
    elemento.innerHTML = "Passe o Mouse!";
}

function load(){
    alert("Página Carregada com Sucesso!!!");
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false;
    }
    return validar;
}

idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));

alert(soma(3, 14));
alert(setReplace("Vai Corinthians!!!", "Corinthians", "Timão" ));
*/

/*
d = new Date();
alert(d);
alert("Dia da semana: " + d.getDay());
alert("Agora é :" + d.getHours() + " Horas ");
alert("E " + d.getMinutes()+ " Minutos");
*/


/*
var count;
for(count=2; count <= 6; count ++){
    alert(count);
};
*/

/*
count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
};
*/

/*
idade = prompt("Qual sua idade? ");
if (idade >= 18){
    alert("Maior de Idade! Acesso Liberado! ")
}else{
    alert("Menor de idade! O Conteúdo a seguir não é apropriado para você! Essa Pagina será fechada! ")
}
*/


//var frutas = [{nome:"Banana", cor:"Vermelha"}, {nome:"Laranja", cor:"Amarela"}]
//console.log(frutas);
//console.log(fruta.nome);
//alert(frutas[1].nome);

/*
var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Banana", "Uva", "Morango"];
//lista.pop();
//lista.push("Laranja");
//console.log(lista);
//alert(lista[0]);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = " Novo Usuario ";
//var data = 30;
//var idade = 25;
//var frase = " Caso não esteja logado, tente novamente! "

//alert("Olá!  " + nome + " - Hoje é: "+ data + " Sua idade é: " + idade);

//console.log(nome);
//console.log(data);
//console.log(idade);
//console.log(frase.toLowerCase());
