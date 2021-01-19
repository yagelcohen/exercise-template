function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    const numbersArr=JSON.parse(input);
    numbersArr.sort(sorts);
    out=numbersArr;
    output.innerText = out;
}
function sorts(a, b){
    return a - b;
}

