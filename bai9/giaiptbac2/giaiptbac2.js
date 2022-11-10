function aaaa(){
    let a=document.getElementById('text').value;
    let b=document.getElementById('text1').value;
    let c=document.getElementById('text2').value;
    let x=-b/(2*a)
    minh=b*b-(4*a*c)
    x1=(-b+Math.sqrt(minh))/(2*a);
    x2=(-b-Math.sqrt(minh))/(2*a);
    
    if (minh==0){
        document.getElementById('result').innerHTML='phương trinh có 1 nghiệm là '+x;
    } else if (minh<0){
        document.getElementById('result').innerHTML='phương trình vô nghiệm';
    }else{
        document.getElementById('result').innerHTML='phương trình có 2 nghiệm là x1= '+x1+ 'và x2 ='+x2;
    }
}