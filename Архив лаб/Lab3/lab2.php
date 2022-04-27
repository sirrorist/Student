<?php
ini_set('max_execution_time', 90000);
function login()
{
    $link = mysqli_connect('localhost', 'root', '', 'lab1');
    return $link;
}
function sqlquery($sql)
{
    $result =  mysqli_query(login(), $sql) or die("Ошибка " . mysqli_error(login()));
    return $result;
}

function mystem($q) {
    $q = iconv('utf-8', 'windows-1251', mb_strtolower($q, 'utf-8'));
    $result = exec('echo "'.$q.'" | mystem.exe -l -i -n -e cp866');
    $result = iconv("cp866", "utf-8", $result);
    return $result;
}

$sql = "SELECT * FROM `table1`";
$result = sqlquery($sql);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
//var_dump($row);
foreach ($rows as $row)
{
   // var_dump($row);
    $text = $row["text"];
    $id = $row["id"];
   echo $id;
  // echo $text;
    echo "</br>";

    $str = preg_replace('/(\d*)/ui', '', $text);
   // $str = mb_strtolower($str);
    $words = preg_split('/[\s!?,.-]/u', $str, -1, PREG_SPLIT_NO_EMPTY);
    foreach ($words as $word)
    {
        $lem = mystem($word);
       // var_dump($lem);
        echo "</br>";
        $pieces = explode(",", $lem);
        $micropieces = explode("=", $pieces[0]);
        if(preg_match( '/^.+\?\?.*$/m', $micropieces[0])=='0')
        {
            //echo $micropieces[0];
            //echo " - ";
            //echo $micropieces[1];
            //echo "</br>";
            $sql = "select * FROM `table2` WHERE `token` = \"$micropieces[0]\" and `numOfDoc` = \"$id\" and `POS`= \"$micropieces[1]\" ";
            $result = sqlquery($sql);
            $rows = mysqli_num_rows($result);
            echo $rows;
            if ($rows == 1)
            {
                $sql1 = "SELECT * FROM `table2` WHERE `token` = \"$micropieces[0]\" and `numOfDoc` = \"$id\" and `POS`= \"$micropieces[1]\"";
                $result1 = sqlquery($sql1);
                $row = mysqli_fetch_row($result1);
                $count = $row[3] + 1;
                // echo $count;
                $sql2 = "UPDATE `table2` SET `id`= \"$row[0]\",`token`=\"$row[1]\",`numOfDoc`=\"$row[2]\", `count`=\"$count\",`POS`=\"$row[4]\" WHERE `id` = \"$row[0]\" ";
                sqlquery($sql2);
            }else {
                $sql3 = "INSERT INTO `table2` (`id`, `token`, `numOfDoc`, `count`, `POS`) VALUES (NULL, \"$micropieces[0]\", \"$id\", \"1\", \"$micropieces[1]\")";
                $result = sqlquery($sql3);
            }
        }
    }

}
?>