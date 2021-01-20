// function run() {
//     const input = document.getElementById("input").value;
//     const output = document.getElementById("output");
//     let out = ""; 
//     output.innerText = out;
// }



    const myArray= [100, 2, 1, 10]
    const isArray=[10, 2, 1 , 3]
    let newArray=[]

   function pushArr(newArray, myArray){
       for(i=0; i< myArray.length; i++){
           if(!(newArray.includes(myArray[i]))){
            newArray.push(myArray[i])
           }
       }
   }
   pushArr(newArray,myArray);
   pushArr(newArray,isArray);
//    console.log(newArray)