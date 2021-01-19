"use strict"
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    
    const array=JSON.parse(input);
    // let = {};
    let isTrue;
    if (Array.isArray (array)) {
        isTrue =  true;
    }else{
        isTrue = false;
    }

        out=isTrue;
    output.innerText = out;
    }
