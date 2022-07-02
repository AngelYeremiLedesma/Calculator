let operationArray = [];
// se crean los eventos para los botones
function init(){
    let keys = document.querySelectorAll("button");
    console.log(keys);
    keys.forEach(element => {
        element.addEventListener("click",actionPerformed);
    });
}
// se decide cuál acción se realizará
function actionPerformed(evento){
    let keyPressed = evento.target.innerText;
    switch(keyPressed){
        case "DEL":
            operationArray.pop();
            break;
        case "CE":
            operationArray = [];
            document.getElementById("jTextField2").innerText = "";
            break;
        case "=":
            calculate();
            break;
        default:
            operationArray.push(keyPressed);
    }
    showOperation();
}
// se calcula el resultado y se muestra en el display
function calculate(){
    let result = 0;
    let factors = getFactors();
    console.log(factors)
    switch(factors.operation){
        case "+":
            result = factors.numA + factors.numB;
            break;
        case "-":
            result = factors.numA - factors.numB;
            break;
        case "/":
            result = factors.numA / factors.numB;
            break;
        case "x":
            result = factors.numA * factors.numB;
            break;    
    }
    document.getElementById("jTextField2").innerText = result;
}
// se obtienen los número implicados en la operación
function getFactors(){
    let strA = "" ,strB ="",operation="";
    for(let i = 0; i < (operationArray.length - 1); i++){
        if((operationArray[i]=="/")||(operationArray[i]=="x")||(operationArray[i]=="-")||(operationArray[i]=="+")){
            operation = operationArray[i];
            i = operationArray.length - 1;
        }
        else{
            strA += operationArray[i];
        }
    } 

    for(let i = strA.length + 1; i < operationArray.length; i++){
        strB += operationArray[i];
    }

    return {
        numA: parseFloat(strA),
        numB: parseFloat(strB),
        operation: operation
    }
}
// se muestra en el display las operaciones  
function showOperation(){
    let text = "";
    for(let i = 0; i < operationArray.length; i++){
        text += operationArray[i];
    }
    document.getElementById("jTextField1").innerHTML = text;
}

init();