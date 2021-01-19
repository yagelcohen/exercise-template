function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let Row = [];
    const array=JSON.parse(input);
    for(i=0; i<array.length; i++){
        // console.log("ROW", i);
            Row.push("ROW" + i);
        for(j=0; j<array[i].length; j++){
            // console.log(array[i][j]);
            Row.push(array[i][j]);
    }
        

}
    out = Row;
    output.innerText = out;
}