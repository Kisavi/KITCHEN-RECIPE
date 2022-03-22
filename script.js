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
    // SECTION 2
    $("#sausage").click(function(){
        $("#sausage-showing").toggle("slow");
        $(".hide-sausage-image").toggle();
        })

        $("#waffles").click(function(){
        $("#waffles-showing").toggle("slow");
        $(".hide-waffles-image").toggle();
        })

        $("#eggs").click(function(){
        $("#eggs-showing").toggle("slow");
        $(".hide-eggs-image").toggle();
        })