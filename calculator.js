let currentInput = '';

let userInput;
while (userInput !== "start calculator") {
    userInput = prompt("Enter a command (type 'start calculator' or not):");
}

function eventClick(value){
    if(value ==="AC"){
        resetCalculator();
    } else if(value === "r"){
        removeOneValue();
    } else if(value === "="){
        calculateResult();
    }else {
        currentInput = currentInput + value
    }

    document.getElementById("result").textContent = currentInput;
}
function calculateResult(){
    try{
        let number = currentInput.split(/[\+\-\*\/]/);
        let operator = currentInput.replace(/[0-9]/g, '');
        let result = parseFloat(number[0]);

        for(let i=0; i<operator.length ; i++){
            let num = parseFloat(number[i+1]);
            let operators = operator[i];

            if(operators === "+"){
                result += num;
            }
            if(operators === "-"){
                result -= num;
            }
            if(operators === "*"){
                result *= num;
            }if(operators === "/"){
                result /= num;
            }
            currentInput = result.toString();
        document.getElementById("result").textContent = result;

        }
    }catch(error){
        document.getElementById("result").textContent = "Syntax Error..........";
    }

}


function resetCalculator(){
    currentInput= '';
}
function removeOneValue(){
    currentInput = currentInput.slice(0,-1);
}
