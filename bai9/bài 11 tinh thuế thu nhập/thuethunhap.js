function vanMinh(){
    let a= document.getElementById('tienluong').value;
    let b= a*0.01;
    
    if (a<=100){
        document.write('số thu nhập cá nhân'+b);
    } else {
        document.getElementById('result').innerHTML=b + '%';
    }
    
}