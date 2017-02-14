<?php
//Set main navigation bar menus
 $bt = debug_backtrace();
 $caller = $bt[count($bt)-1]['file'];
 
//vars init
$nav = Array();
$option = Array();

 $nav[0]['text']  = 'Requests';
 $nav[0]['file']  = 'index.php';

 $nav[1]['text']  = 'Preferences';
 $nav[1]['file']  = 'index.php';

 $nav[2]['text']  = 'Reports';
 $nav[2]['file']  = 'index.php';

 $nav[3]['text']  = 'About';
 $nav[3]['file']  = 'index.php';

//Set main navigation sub options
//$option[element from nav][sub menu element][text/file]
 $option[0][0]['text']  = 'New Tooling';
 $option[0][0]['file']  = 'index.php';
 
 $option[0][1]['text']  = 'New Shipping';
 $option[0][1]['file']  = 'index.php';
 
 $option[0][2]['text']  = 'New Package';
 $option[0][2]['file']  = 'index.php';
 
 $option[1][0]['text']  = 'Opciones';
 $option[1][0]['file']  = 'index.php';
 
 $option[1][1]['text']  = 'Usuarios';
 $option[1][1]['file']  = 'index.php';
 
 $option[1][2]['text']  = 'Roles';
 $option[1][2]['file']  = 'index.php';
 
 $option[1][3]['text']  = 'App';
 $option[1][3]['file']  = 'index.php';
 
 $option[2][0]['text']  = 'New Tooling';
 $option[2][0]['file']  = 'index.php';
 
 $option[2][1]['text']  = 'New Shipping';
 $option[2][1]['file']  = 'index.php';
 
 $option[2][2]['text']  = 'New Package';
 $option[2][2]['file']  = 'index.php';

?>


<div id="bootstrap-nav">
<nav>

 <div id="nav-main" class="collapse navbar-collapse" >
      <ul class="nav navbar-nav">

<?php

 for ($i=0; $i<count($nav); $i++) //loop through nav var elements
    {
          $text = $nav[$i]['text'];
          $link = str_replace('.php', '', $nav[$i]['file']);

        if (strpos($caller,$nav[$i]['file']) === FALSE){
          $active = '';
        }
        else{
            $active = 'class="active"';
        }
        
          if(isset($option[$i]) && (count($option[$i])) > 0){ //Look for possible sub options
                    echo "<li class='dropdown'>
                    <a class='dropdown-toggle' data-toggle='dropdown' href='".$link."'>".$text."<span class='caret'></span></a>
                    <ul class='dropdown-menu'>";
           for($a=0; $a<count($option[$i]); $a++){
             $textOption = $option[$i][$a]['text'];
                          $linkOption = str_replace('.php', '', $option[$i][$a]['file']);
                            echo "<li><a href='".$linkOption."'>".$textOption."</a></li>";
           }
             echo "</ul>
                   </li>";

         }else{
             echo "<li ".$active."><a href='".$link."'>".$text."</a></li>";
         }
    }//for
?>
         </ul>

<script>
$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
  });
});
</script>

</div>
</nav> 

</div> 