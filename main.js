
function change() {
    document.getElementById("AZ").style.color = "blue";
    document.getElementById("AZ").style.fill = "blue";
    console.log("hi");
    alert("no");
}

function colorChange(){
    //const fs = require('fs') ;
    alert("hi");
    // fs.readFile('stateinfo.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err) ;
    //         return ;
    //     }
    //     console.log(data) ;
        
    // })
    fetch("stateinfo.txt").then(res=>console.log(res));
    
}