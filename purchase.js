"use strict"

// the array that store each kind of images 
var bakery_store = [];
var bakery_all = [];
var bakery_shipping = [];
// the variable of the number of images
var num;
var num2

// the loop to get the images on the folder
for (num=1; num <= 16; num++) {
    bakery_all.push("imgs/bakeImg/bakeImg_" + num + ".jpg");

}

for (num2=1; num <= 8; num++) {

    bakery_shipping.push("imgs/bakeImg/shipping/bakeImg_" + num + ".jpg");
}


$(document).ready(function () {
    // set up the filter boder
    $("#all").css("border-bottom", "solid .5rem rgb(138,174,162)");
    //if click the button, detail info window pop up
    $(".moreButton").click(function () {
        $(".detailedWindow").show();
        var imgSrc = $(this).siblings(".bakeryItems_cake").attr("src")

        $(".detailedImage img").attr("src", imgSrc);
    });
    //if click the icon, hide the window
    $(".closeIcon").click(function () {
        $(".detailedWindow").hide();
    });


    //if click the all filter, change the images to all
    $("#all").click(function () {
        alert("!!");  
        for (var i = 0; i <16; i++) {
            var imgSrc = bakery_all[i];
            var count=i+1;
            $("#bakeryItems_cake_" + count).attr("src", imgSrc);
            //alert(imgSrc);
            $("#all").css("border-bottom", "solid .5rem rgb(138,174,162)");
            $("#shipping").css("border-bottom", "");
        }
        $("#all").css("border-bottom", "solid .5rem rgb(138,174,162)");
        $("#shipping").css("border-bottom", "");
    });

    //if click the shipping filter, change the images to shipping
    $("#shipping").click(function () {
        alert("??");
        
        for (var i = 0; i <8; i++) {
            var imgSrc = bakery_shipping[i];
            //alert(imgSrc);
            var count=i+1;
            $("#bakeryItems_cake_" + count).attr("src", imgSrc); 
        }
        $("#shipping").css("border-bottom", "solid .5rem rgb(138,174,162)");
        $("#all").css("border-bottom", "");
    });

   


});