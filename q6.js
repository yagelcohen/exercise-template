"use strict"
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    const numbersArr=JSON.parse(input);
    //15814
    let answer = [numbersArr[0]];
    for(let i=1; i<numbersArr.length;i++){
        if((numbersArr[i-1]%2 === 0)&&(numbersArr[i]%2 === 0)){
            answer.push('-', numbersArr[i]);
        }else{
            answer.push(numbersArr[i]);
        }
    
    }
         out= answer;
    output.innerText = out;
}