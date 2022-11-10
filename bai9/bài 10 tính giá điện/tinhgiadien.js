function a(){
    let a= document.getElementById('so dien').value;
    let b= a*3000;
    let c= a*2500;
     if (a<=100){
        document.getElementById('result').innerHTML=b+ ' VND'; 
     }else{
        document.getElementById('result').innerHTML=c+ ' VND';
     }
    
}
