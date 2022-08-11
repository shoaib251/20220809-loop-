function sho() {
    let speed = document.getElementById('speed').value;
    let time = document.getElementById('hour').value;
    document.getElementById('shu').innerHTML="";
    for (let  hour = 1; hour <= time; hour++) {
        let final = "you have traveled " + speed * hour + " kilometers in " + hour + " hours" + "<br>";
        document.getElementById('shu').innerHTML += final;
    }
}