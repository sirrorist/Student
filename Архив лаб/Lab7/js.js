function Text(text)
			{
    document.anketa.show.disabled = true;    
    if(text!= ""){
        document.anketa.show.disabled = false;
			}
			}
function go(){
    var text = document.getElementById('textt').value;
    var count = +0;
    if(document.getElementById('space').checked == true){
        Sp = /\s{1}/;
        while(text.match(Sp) != null){
            count++;
            text = text.replace(Sp, "");
        }
    }
    if(document.getElementById('swapg').checked == true &&
       document.getElementById('swapbx').value != ""){
        swapbx = document.getElementById('swapbx').value;
        arr = text.split('');
        vo = /[аяиюэоаыуе]/i;
        text = "";
        for(i = 0; i < arr.length; i++){
            if(arr[i].match(vo) != null &&
            arr[i] != swapbx){
                arr[i] = swapbx;
                count++;   
            }
            text += arr[i];
        }
    }
    document.getElementById('count').value = "";
    if(document.getElementById('shwcnge').checked == true){
        document.getElementById('count').value = count;
    }
    
    
    var find = document.getElementsByName('poisk');
	
    var index = '-1';
    var answer = "";
    for(i = 0; i < find.length; i++){
        if(find[i].checked == true){
           index = i; 
        }
    }
	switch (index) {
		case '-1':
			answer = text;
			break;
		case parseInt(0):
		case parseInt(1):
			word = text.split(' ');
        	min = word[0]; max = word[0];
            for(i = 0; i < word.length; i++){
            	
				if(min.length > word[i].length){
                    min = word[i];
                }
				if(max.length < word[i].length){
                	max = word[i];
            	}
        	}
			if(index == 0){
				answer = max;
			}
			else{
				answer = min;
			}
		break;
		case parseInt(2):
			regCo = /[йцкнгшщзхфвпрлджчсмтб]/ig;
        	vo = /[аяиюэоаыуе]/ig;
        	for(i = 0; i < word.length; i++){
            	if(word[i].match(regCo) == null ||
               	word[i].match(vo) == null){
                	continue;
            	}
            	if(word[i].match(regCo).length == word[i].match(vo).length){
                answer += word[i] + " ";
                }
            	}
			break;
        	}
    document.getElementById('result').value = answer;
}