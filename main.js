var contador =0;

//setTimeout(loaded, 5000);

function onLoad(){
    contador++;
    document.getElementsByClassName("teste")[0].innerHTML = "LOADING " + (contador*20) + "%";
    if(contador>=5){
        setTimeout(loaded,2000);        
    }
    console.log(contador);
}

function loaded(){
    var x = document.getElementsByClassName("loading");
    x[0].style.opacity = 0;
    setTimeout(dnone, 1000);
}

function dnone(){
    var x = document.getElementsByClassName("loading");
    x[0].style.display = "none";
}