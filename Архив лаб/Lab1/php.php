<?php
    $n1 = $_GET["n1"];
    $n2 = $_GET["n2"];
    if (is_numeric($n1) && is_numeric($n2))
    {
        $str = "
        <style>
            table {
                border: 2px solid black;
            }

            td {
                background: green;
                border: 1px solid black;
                text-align: center;
            }

            tr:first-child td{
                background: yellow;
            }

            td:first-child {
                background: yellow;
            }
        </style>
        <table>";
        for ($i = 1; $i <= $n1; $i++)
        {
            $str .= "<tr>";
            for ($i1 = 1; $i1 <= $n2; $i1++)
            {
                $str .= "<td>" . $i*$i1 . "</td>";
            }
            $str .= "</tr>";
        }
        $str .= "</table>";
        echo $str;
    }
?>