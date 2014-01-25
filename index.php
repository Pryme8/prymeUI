<!DOCTYPE html>
<!--
Copyright 2014 Andrew V. Butt Sr, Pryme8@gmail.com
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>prymeUI</title>
        <link rel="stylesheet" type="text/css" href="./css/main.css">
        <link rel="stylesheet" type="text/css" href="./css/prymeui.css">
        <script src="js/jquery-2.0.3.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <?php
        echo "<div class='wrapFix'>";
        echo "<div class='aboveFold'><BR>";
        echo "<h1>PRYMEUI<span>a jQuery plugin!</span><span>version 0.0.2</span></h1><BR>";
        echo "<div class='contentBox'><span class='titleSpan'>Usage:</span><BR>$(target).prymeui();</div><BR>";
        echo "<div class='topMenu'><div class='bigButton'>DOWNLOAD</div><div class='bigButton' onClick='slideFold(\"up\");'>EXAMPLES</div><div class='bigButton'>CONTACT</div></div>";
        echo "<div class='footArea foldDown' onClick='slideFold(\"down\");'></div>";   
        echo "</div>";
        echo "<div class='belowFold'>";
        echo "<div class='leftCol'>";
        echo "<ul>";
        echo "<li><a><span>Input Elements</span></a>";
        echo "<ul><li><a><span>input</span></a></li>";
         echo "<li><a><span>select</span></a>";
          echo "<li><a><span>radioButtons</span></a>";
        echo "</li></ul>";
    
   
        echo "</ul>";
        
        echo "</div>";
        echo "<div class='rightCol'>";
        //INPUT ELEMENTS
        echo "<div class='contentBox exampleSection' id='Input_Elements'><span class='titleSpan'>Input Elements</span>";
        //INPUT 
        echo "<BR><div class='contentBox exampleSection' id='input'><span class='titleSpan'>&#60;input&#62;</span>";
        echo "<div class='withoutBox'><span>regular</span><BR><center><input id='inputText' name='inputText' type='text' placeholder='input box...' value=''></input></center></div>";
        echo "<div class='withBox'><span>prymeUI</span><BR><center><input id='inputText' name='inputText' type='text' placeholder='input box...' value=''></input></center></div>";
        echo "<script>$('#input .withBox #inputText').prymeUI();</script>";
        echo "</div><BR>";
        //SELECT
        echo "<div class='contentBox exampleSection' id='select'><span class='titleSpan'>&#60;select&#62;</span>";
        echo "<div class='withoutBox'><span>regular</span><BR><center><select id='dropBox' name='dropBox'><option value='1'>Option 1</option><option value='2'>Option 2</option><option value='3'>Option 3</option></select></center></div>";
        echo "<div class='withBox'><span>prymeUI</span><BR><center><select id='dropBox' name='dropBox'><option value='1'>Option 1</option><option value='2'>Option 2</option><option value='3'>Option 3</option></select></center></div>";
        echo "<script>$('#select .withBox #dropBox').prymeUI();</script>";
        echo "</div><BR>";
        //radioButtons
        echo "<div class='contentBox exampleSection' id='radioButtons'><span class='titleSpan'>&#60;Radio&#62;</span>";
        echo "</div>";
        
        //INPUT ELEMENTS END!
        echo "</div>";
        
        echo "</div>";
        echo "</div>";
        
        ?>
    </body>
</html>
