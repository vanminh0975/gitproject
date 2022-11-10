function B(){
let a= document.getElementById('text').value;
if (a>0 && a<=120){
    document.getElementById('check').innerHTML=a+" là tuổi của 1 người";
}else{

    document.getElementById('check').innerHTML=a+" không là tuổi của 1 người";
}
}