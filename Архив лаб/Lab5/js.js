function refresh(){
    
    location.reload();
}
function main(){

    if (document.anketa.tx1.value =='')
        {
            alert('Введите име преподавателя');
            return false;
        }
    for (var i = 0; i < 4; i++)
    {   
        if(anketa.r1[i].checked == true) {
           var n = anketa.r1[i].value; n = Number(n);
        };
        if(anketa.r2[i].checked == true) {
           var p = anketa.r2[i].value; p = Number(p);
        };
        if(anketa.r3[i].checked == true) {
           var o = anketa.r3[i].value; o = Number(o);
        };
        if(anketa.r4[i].checked == true) {
           var a = anketa.r4[i].value; a = Number(a);
        };
        
    };
    if((isNaN(n)) || (isNaN(p)) || (isNaN(o)) || (isNaN(a))){alert('Поставьте оценки везде');}
        else{
        s=0;s=Number(s);s=n+p+o+a;
        ss=0;s=Number(s);ss = s/4;
    document.anketa.txta.value = "Преподаватель: " + anketa.tt1.value + "\rПолученные оценки: " + n + " " + p + " " + o + " " + a + " " + "\rОбщее кол-во баллов: " + s + "\rКачество преподавания: " + ss.toFixed(2);
        }
}