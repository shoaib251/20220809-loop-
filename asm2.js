

function level(){
    // let level=document.getElementById('level').value;
    
    let total;
    for (let y = 1; y < 26; y++) {
       total = 1.5*y; 
      let year="<h2>"+total+"</h2>";
    document.getElementById('h2').innerHTML += year;
    }
    
    }