<html>
	<head>
		<title>Массив2</title>
		<meta charset="utf-8">
		<link rel="stylesheet">
	</head>
<body>
	<form name="forma" method="POST">
		Введите размерность массива:<input type="text"style="width:80px;" name="size"><p>
		Введите диапозон чисел:<p>
        От:<input type="text" name="ot" style="width:75px;">
        До:<input type="text" name="do"style="width:75px;">
		<input type="submit" name="button_id" value="Отправить"><p>       
	</form>
<?php
	if((isset($_POST['size']))&&(isset($_POST['ot']))&&(isset($_POST['do']))&&(is_numeric($_POST['size']))&&(is_numeric($_POST['ot']))&&(is_numeric($_POST['do'])))
	{	
		$n = $_POST['size'];
		$ot = $_POST['ot'];
		$do = $_POST['do'];
		if($n==0)
		{
			echo "Введите ненулевой размер массива!";
		}
		else
		{
			if($ot > $do)
			{
				echo "Неправильно задан диапозон значений!";
			}
			else
			{
				echo "Размерность:".$n."<br>";
				echo "От:".$ot."<br>";
				echo "До:".$do."<br>";			
				$array = array();
				$arrayTwo = array();
				$result=1;
				echo "<table border=1>";
				for ($i = 0; $i < $n; $i++) 
				{	
					echo "<tr>";
					for($j = 0; $j < $n; $j++)	
					{
						echo "<td>";
						$array[$i][$j]=rand($ot,$do);
						print($array[$i][$j]);
						echo "</td>";
					}					
				}
				$sum=0;
				echo "</table>";			
				for ($i = 0; $i < $n; $i++) 
				{						
					for($j = 0; $j < $n; $j++)	
					{						
						if (!($i<$j+1)&&!($j<$n-$i))
						{												
							$sum+=$array[$i][$j];
						}						
					}					
				}				
				echo "Сумма:".$sum;
			}
		}
	}
	else
	{
		echo "Введите целые натуральные числа";
	}
?>
</body>
</html>