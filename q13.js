"use strict"
let out = "";
const myArray=[]
let x = 0;

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    myArray.push(input);
    out=out + `element ${x} = ${input}\n`;
    x += 1;
    output.innerText = out;
}
   function display_array(){  
        document.write(myArray)
   }

