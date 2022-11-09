function check_month(){
    let month=+document.getElementById("Kiem Tra").value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
            document.getElementById('Check').innerHTML=" thang "+ month +"có 31 ngày"  ;
            break;
        case 3:
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('Check').innerHTML=" thang "+ month +"có 30 ngày";
            break;
        case 2:
            document.getElementById('Check').innerHTML=" có 28 ngày hoặc 29 ngày";
            break;
            default:
            document.getElementById("Check").innerHTML = "Vui lòng nhập lại tháng";
    }

                                                  


    }
