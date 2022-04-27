var E;
	function load()
	{
		E = document.form;
	}
	function check_begin()
	{
		var check = /^[0-3]?[0-9][./\\-][0-1]?[1-9][./\\-][1-9][0-9]?[0-9]?[0-9]?$/;
		if(!check.test(E.begin.value))
		{
			E.begin.value = "";
			alert("Введенная дата имеет неверный формат");
		}
	}
	function calculate()
	{
		if(E.begin.value == "" || E.end.value == "")
		{
			alert("Заполните все поля");
			return 0;
		}
		var check = false;
		for(var i = 0;i < 5; i++)
			if(E.elements.radBut[i].checked)
				check = true;
		if(!check)
		{
			alert("Необходимо выбрать пункт из списка!");
			return 0;
		}
		var exp = /^[0-3]?[0-9]/;
		var date = exp.exec(E.begin.value);
		exp = /[./\\-][0-1]?[1-9][./\\-]/;
		var month = exp.exec(E.begin.value);
		month[0] = month[0].replace(/[./\\-]/g, '');
		exp = /[1-9][0-9]?[0-9]?[0-9]?$/;
		var year = exp.exec(E.begin.value);
		var dt1 = new Date(year, parseInt(month) - 1, date);
		var dt2 = new Date(E.end.value);
		if(dt1>dt2)
		{
			alert("Начало периода не может быть позже конца периода");
			return 0;
		}
		var num = 0;
		if(E.elements.radBut[0].checked)
		{
			while(dt1<dt2)
			{
				num++;
				dt1.setDate(dt1.getDate()+1);
			}
		}
		if(E.elements.radBut[1].checked)
		{
			while(dt1<dt2)
			{
				
				if(dt1.getDay() == 0 || dt1.getDay() == 1)					             
					{
					num++;
				}
				dt1.setDate(dt1.getDate()+1);
			}
		}
		if(E.elements.radBut[2].checked)
		{
			while(dt1<dt2)
			{
				if(dt1.getDay() != 0 && dt1.getDay() != 1)
				{
					num++;
				}
				dt1.setDate(dt1.getDate()+1);
			}
		}
		if(E.elements.radBut[3].checked)
		{
			dt1.setDate(dt1.getDate()+7);
			while(dt1<dt2)
			{
				num++;
				dt1.setDate(dt1.getDate()+7);
			}
		}
		if(E.elements.radBut[4].checked)
		{
			dt1.setMonth(dt1.getMonth()+1);
			while(dt1<dt2)
			{
				num++;
				dt1.setMonth(dt1.getMonth()+1);
			}
		}
		E.resultat.value = num;
	}