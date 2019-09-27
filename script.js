$(document).ready(function() {
    
  $("div").hover(function(){
    alert("Close me to turn the box green!");
  });          
$("div").mouseenter(function(){
    $("#area").css("background-color", "green");
});
    
    $("button").click(function(){
        $("#area").css("background-color", "#953674");
    });
    
});