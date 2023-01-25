function counter(){
    let quant = 1;
    document.getElementById('quant').innerHTML = quant;

    const up = document.querySelector('#up');
    const down = document.querySelector('#down');

    up.onclick = function(){
        quant++;
        if(quant>100){
            quant =100;
        }
        document.getElementById('quant').innerHTML = quant;
    }
    
    down.onclick=function(){
        quant --;
        if(quant<1){
            quant = 1;
        }
        document.getElementById('quant').innerHTML = quant;
    }
}
counter();
