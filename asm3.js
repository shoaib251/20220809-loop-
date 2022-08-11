
function club(){

    let total=2500;
    
    for (let a =1; a<=6;  a++) {
    let charge=total*4/100;
    //  charge +=  total;
      total +=charge;
      document.getElementById('h2').innerHTML +="<h2>"+total+"</h2>";
    }
   
    }
    