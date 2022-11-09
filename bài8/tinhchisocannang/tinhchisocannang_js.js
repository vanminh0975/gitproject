function Ketqua(){
    let chieucao=parseInt(document.getElementById("Chieucao").value) ;
    let cannang=parseInt(document.getElementById("cannang").value) ;
    let bmi= cannang /(chieucao * chieucao );
    alert (chieucao+","+cannang+","+bmi)
    let ketqua="";
    if (bmi<18){
        document.write("suydinhduong");
    } else if(bmi<25){
        document.write("ok");
    } else if(bmi<30){
        document.write("candoi");
    } else
        document.write("beophi");
    document.getElementById("kiemtra").innerHTML="Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";      
}


    
