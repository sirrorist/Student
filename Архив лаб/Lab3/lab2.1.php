<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="POST">
<select name="s1">
<option value="1">Сортировать по алфавиту</option>
<option value="2">Сортировать по длине слова</option>
<input type = "submit" name="sort" value="Сортировать"><br>
<input type = "button" name="parse" value="Пропарсить текст" onclick="location.href='lab2.php'">
</form>
</select>
<?php
$link = mysqli_connect('localhost', 'root', '', 'lab1')
    or die("Ошибка " . mysqli_error($link)); 
if(isset($_POST['sort']) && $_POST['s1']==1)
{
    $query = "select * from `table2` order by `token` ASC";
    
}
else
{
    $query = "select * from `table2` order by CHAR_LENGTH(`token`) ASC";
}


 
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    $rows = mysqli_num_rows($result); 
     
    echo "<table border='1'><tr><th>ID</th><th>Токен</th><th>POS</th></tr>";
    for ($i = 0 ; $i < $rows ; ++$i)
    {
        $row = mysqli_fetch_row($result);
        echo "<tr>";
            for ($j = 0 ; $j < 5 ; ++$j)
            {
                if($j==0||$j==1||$j==4) echo "<td>$row[$j]</td>";
            }
        echo "</tr>";
    }
    echo "</table>";

    mysqli_free_result($result);
}
 
mysqli_close($link);
?>   
</body>
</html>

