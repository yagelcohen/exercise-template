// function run() {
//     const input = document.getElementById("input").value;
//     const output = document.getElementById("output");
//     let out = "";   
//     output.innerText = out;
// }


let years = 1000
for(i=1; i<years; i++){
if(i%4===0 && i%100!==0){
    console.log(i + "this year is a  leap year")
}else if(i%100===0 && i%400===0){
    console.log(i + "this year is a  leap year")
}
else{console.log(i)}
}