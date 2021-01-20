// function run() {
//     const input = document.getElementById("input").value;
//     const output = document.getElementById("output");
//     let out = "";
//     output.innerText = out;
// }

let newArray=[NaN,NaN, 0, 15, 1, false, -22, '',undefined, 47, null];

    function bouncer(newArray) {
    return newArray.filter(Boolean);
  }
    newArray=bouncer(newArray);
    console.log(newArray);
  