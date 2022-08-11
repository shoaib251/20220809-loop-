
function ahmad()
{

  let bool=document.getElementById('burn').value;
  let value=0;
  document.getElementById('h2').innerHTML="";
  for (let index = 1; index <=bool; index+=5 ) {
    value +=bool*3.6;
   
  }
  document.getElementById('h2').innerHTML ="<h2>"+value+"</h2>";
}