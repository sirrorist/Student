function change() {
   var s = 484700;
   var a = 0, b = 0, c = 0, d = 0, e = 0, fs = 0;
   
   document.anketa.car.src = "a.png";
   for(var i = 0; i < 6; i++){
       if(document.anketa.a1[i].checked == true){
          var a = document.anketa.a1[i].value;
           if(a == '1'){document.anketa.car.src = "http://pngimg.com/uploads/bmw/bmw_PNG1712.png";
           a = s; fs = a;
                 };
           if(a == '2'){document.anketa.car.src = "http://cdn.alta-karter.ru/files/images/articles/Kovriki/1_carpet.png";
           b = 1200; fs = fs + b; 
                   };
           if(a == '3'){document.anketa.car.src = "http://karterauto.ru/wp-content/uploads/2016/02/SHerif.png";
           c = 4500; fs = fs + c;
                   };
           if(a == '4'){document.anketa.car.src = "https://good-wheels.ru/thumbs/tire/model/gallery/x_inset_normal_nokian-hakkapeliitta-9.png";
           d = 12000; fs = fs + d;         
                 };
           if(a == '5'){document.anketa.car.src = "https://kolesa-kik.ru/upload/images/b03b9babd96b4ebea6e0a0afab390d62.png";
           e = 16000; fs = fs + e;
                  };
      };
       document.anketa.txbb.value =fs;
       if(document.anketa.txbb.value == 518400){
           fs = parseFloat(fs) * 0.90;
           document.anketa.txbb.value = fs;
           alert('Скидка 10%');
       }
    };
    
}

function go(){
    if(document.anketa.txbb.value != 0){
       alert('Заказ успешно оформлен');
       }
    else{
       alert('Вы ничего не выбрали')
       };
}
