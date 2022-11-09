function tinhtien() {
   let Soluong = document.getElementById("soluong").value;
   let  From = document.getElementById("From").value;
   let To = document.getElementById("To").value;
   let Ketqua 
    if (From == "VND" && To == "USD" )
        {Ketqua = (Soluong/23000)+"$"}
    if (From == "USD" && To == "VND" )      
        {Ketqua = (Soluong*23000)+"Đ" }
    if (From == "VND" && To == "VND")    
        {Ketqua = Soluong+"Đ"}
    if (From == "USD" && To == "USD")
        {Ketqua = Soluong+ "$"}    
   
   document.getElementById("Ketqua").innerText="Ketqua: " + Ketqua ;
    
   }

