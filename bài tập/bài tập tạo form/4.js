function kiemtra(){
    let a= +document.getElementById('text').value;
    let b= +document.getElementById('text1').value;
    let c = (-b)/a;
    let result
    if (a!=0 && b!=0){
      result = c
    } else if(b!=0){
       result =('phương trình vô nghiệm');
    } else if(a!=0){
       result =('phương trình có 1 nghiệm duy nhất');
    } 
    else
        {result = 'vô số nghiệm'}
    document.getElementById('result').innerHTML=result ;   
}