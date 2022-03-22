$(document).ready(function() {

    $("#pancake").click(function(){
      $("#pancake-showing").toggle("slow");
      $(".hide-pancake-image").toggle();
    })

    $("#cake").click(function(){
      $("#cake-showing").toggle("slow");
      $(".hide-cake-image").toggle();
    })

    $("#mandazi").click(function(){
      $("#mandazi-showing").toggle("slow");
      $(".hide-mandazi").toggle();
    })
    
    });