function tinhtien() {
   let Soluong = document.getElementById("soluong").value;
   alert (Soluong)
   let  From = document.getElementById("From").value;
   alert (From)
   let To = document.getElementById("To").value;
   alert (To)
    if (From == "VND" && To == "USD")
        {Ketqua = Soluong/23000}
    if (From == "USD" && To == "VND")      
        {Ketqua = Soluong*23000}
    if (From == "VND" && To == "VND")    
        {Ketqua = Soluong}
    if (From == "USD" && To == "USD")
        {Ketqua = Soluongg}    
   
   document.getElementById("KQ").innerText="Ketqua: " + Ketqua;
    
   }

