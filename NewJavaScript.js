"use strict"

var bakery_store = [];
var bakery_all = [];
var bakery_shipping = [];
// var bakery_default = [8];

//var num;
for (var num = 1; num <= 8; num++) {
    bakery_store.push("bakery_store" + num + ".jpg");
    bakery_all.push("bakery_all" + num + ".jpg");
    bakery_shipping.push("bakery_shipping" + num + ".jpg");
}

$(document).ready(function () {
    $(".moreButton").click(function () {
        $(".detailedWindow").show();
        var imgSrc = $(this).siblings(".bakeryItems_cake").attr("src")
        // alert("You have added to cart!");
        alert(imgSrc);

        // $(".detailedImage").append('<img src=' + ' " '+imgSrc+ ' " '+'/>');
        $(".detailedImage img").attr("src", imgSrc);

    });

    $(".closeIcon").click(function () {
        $(".detailedWindow").hide();
    });

    // $(".bakeryNav_shipping").click(function () {
    //     alert("!!");
    
    //     for (var i = 0; i <= 8; i++) {
    //         // alert("???");
    //         var imgSrc = bakery_shipping[0];
    //         $("#bakeryItems_cake_" + i).attr("src", imgSrc);
    //     }
    // });

    $("#all").click(function () {
        alert("!!");
      
        for (var i = 0; i <= 8; i++) {
            // alert("???");
            var imgSrc = bakery_all[0];
            $("#bakeryItems_cake_" + i).attr("src", imgSrc);
            $("#all").css("border-bottom", "solid .5rem black");
            $("#shipping").css("border-bottom", "");
        }
    });

    $("#shipping").click(function () {
        //alert("!!");
        
        for (var i = 0; i <= 8; i++) {

            var imgSrc = bakery_store[0];
            $("#bakeryItems_cake_" + i).attr("src", imgSrc);
            $("#shipping").css("border-bottom", "solid .5rem black");
            $("#all").css("border-bottom", "");
        }
    });

   


});