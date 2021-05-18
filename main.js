//exo 1 condition
var a =10;
var b= 5;
if(a>b){
    alert("le nombre max est : " + a);
}else{
    alert("le nombre max est :" + b);
}

//exo 2 condition
function getTheNumber(){
var val=document.getElementById("num").value;
if(val%2 == 0){//&&(typeof(val==Number))
    alert(val+" est un nombre pair")}
else{
    alert(val+" est un nombre impaire");
}};

