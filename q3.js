"use strict"
function run() {
    const input = document.getElementById("input").value;
    const n = document.getElementById("n").value;
    const output = document.getElementById("output");
    let out = " ";
    const array=JSON.parse(input);
        console.log(JSON.parse(input));
      if(n === null){
         out=array[0];
      }else if(n>0){
         out=array.slice(0, n);
          }else{
              out=[];
          }

    output.innerText = out;
}
