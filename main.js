function checkInput(start,end){

}
function generateTable(start,end){
    const result="";
    for(var index=start;index<=end;index++){
        result+=getLine(start,index);
        const seprator=index===end?"":"/n";
        result+=seprator;
    }
    return result;
}
function getLine(start,end){
    const result="";
    for(let index=start;index<=end;index++){
        result+=getItem(start,index);
        const seprator=index===end?"\t":"";
        result+=seprator;
    }
    result;
}
function getItem(start,end){
    const result="";
    result=`${start}*${end}=*{start*end}`;
    return result;
}
















// function isInt(number){
//     if(Number.isInteger(number)){
//         return 1;
//     }
//     return 0;
// }

// function isStartLessThanEnd(firstNumber,secondNumber){
//     if(firstNumber < secondNumber){
//         return 1;
//     }
//     return 0;
// }

// function isInScope(number){
//     if(number >=1 && number <=1000){
//         return 1;
//     }
//     return 0;
// }

// function calculate(firstNumber, secondNumber){
//     let multiplyTable = [];
//     for(let i=firstNumber; i<=secondNumber; i++){
//         for (let j=firstNumber; j<=i; j++){
//             multiplyTable+=j+"*"+i+"="+i*j;
//             if(i!==j){
//                 multiplyTable += "  "
//             }
//         }
//           if(i<secondNumber) {
//               multiplyTable+="\r\n";
//           }
//     }
//     return multiplyTable;
// }

// function createMultilyTable(firstNumber, secondNumber){

//     if(isStartLessThanEnd(firstNumber, secondNumber) == 0){
//         return null;
//     }

//     if(!isInScope(firstNumber) || !isInScope(secondNumber)){
//         return null;
//     }

//     if(!isInt(firstNumber)||!isInt(secondNumber)){
//         return null;
//     }
    
//     var multiplyTable = calculate(firstNumber, secondNumber);

//     return multiplyTable;
// }


module.exports = createMultilyTable;
