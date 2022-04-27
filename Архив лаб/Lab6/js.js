function refresh(){
    
    location.reload();
}
function ch(){  
    var a = document.anketa.inpt2.value; b = parseInt(a);
    var aa = "", c = "";
    if ((b == 0) || (isNaN(b)))
        {
            alert('введите кол-во часов корректно');
            b = 0;
        };
    for(i = 0; i < 5; i++){
        if(anketa.a1[i].selected)
            aa = anketa.a1[i].value;
    };
    for(i = 0; i < 6; i++){
        if(anketa.a2[i].selected)
            c = anketa.a2[i].value;
    };
    document.anketa.inpt2.value = b;
    if((aa == "")||(c == ""))
    {alert('выберите язык и статус')}
    else
    {
    document.anketa.res.disabled = aa && b && c ? false : "disabled";
    };
    document.anketa.inpt1.value = c;
}
function goo(){
    var c = "";
     for(i = 0; i < 6; i++){
        if(anketa.a2[i].selected)
            c = anketa.a2[i].value;
    };
    var lang = ["английский ","французский ","немецкий ","китайский ","итальянский "];
    var selec = [];
    for(var i = 0; i < 5; i++){
        if(anketa.a1[i].selected)
            selec.push(lang[i]);
    };
    var ho = parseInt(anketa.inpt2.value);
    c = parseInt(c);
    var val = selec.length*ho*c;
    document.anketa.txtres.value="Для изучения выбран:\n" + selec + "по " + c + "руб. за час\nСтоимость " + val;
}