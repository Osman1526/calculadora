function suma(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
 
    resultado = n1+n2;
 
    document.getElementById("resultado").innerText = resultado;
 
}
function resta(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
 
    resultado = n1-n2;
 
    document.getElementById("resultado").innerText = resultado;
 
}
function multiplicacion(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
 
    resultado = n1*n2;
 
    document.getElementById("resultado").innerText = resultado;
}
 function division(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
 
    resultado = n1/n2;
 
    document.getElementById("resultado").innerText = resultado;
 }
 function potenciacion(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
 
    resultado = n1**n2;
 
    document.getElementById("resultado").innerText = resultado;
 }
  function raizcuadrada(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let resultado = Math.sqrt(n1);
   
    document.getElementById("resultado").innerText = resultado;
 }
 function division() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    if (n2 === 0) {
        document.getElementById("resultado").innerText = "Error: División por cero";
        return;
    }
    let resultado = n1 / n2;
    document.getElementById("resultado").innerText = resultado;
}