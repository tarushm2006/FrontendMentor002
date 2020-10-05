var john = false;

function clickNext(){
    john= !john;
    slideshow();
}

function slideshow(){
    var x = document.getElementById("tanyaimg");
    var y = document.getElementById("johnimg");
    var a = document.getElementById("tanyatext")
    var b = document.getElementById("johntext");
    var p = document.getElementById("johna");
    var q = document.getElementById("tanyaa");
    
    x.style.display= "inline";
    y.style.display= "none";
    a.style.display = "inline";
    q.style.display = "block";
    b.style.display= "none";
    p.style.display="none";
    if(john === true){
        x.style.display="none";
        a.style.display= "none";
        y.style.display="block";
        b.style.display= "block";
        p.style.display= "block";
        q.style.display= "none";
    }
}
