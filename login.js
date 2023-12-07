function entrar(){
    document.getElementById('infos').style.display = "block";
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    
    document.getElementById('infonome').innerHTML = `${nome.value}`;
    document.getElementById('infoemail').innerHTML = `${email.value}`;

    nome.value = "";
    email.value = "";
}
function sair(){
    document.getElementById('infos').style.display = "none";
}
function exibirImc(){
    document.getElementById('infos').style.display = "none";
    document.getElementById('imc').style.display = "block";
}
function calcImc(){
    document.getElementById('infosImc').style.display = "block";
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');

    document.getElementById('infopeso').innerHTML = `${peso.value}`;
    document.getElementById('infoaltura').innerHTML = `${altura.value}`;
   
    altura.value = "";
    peso.value = "";


    let result = parseFloat(peso.value / parseFloat(altura.value) * parseFloat(altura.value));
    
    document.getElementById('resultado').innerHTML = `${result}`
}