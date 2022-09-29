// Jquery of Restaurants Cards Show and Hide
$("#Most_Selling").on('click', function () {
$('#categ1').slideToggle(1000);
});

$("#Combo_Meals").on('click', function () {
$('#categ2').slideToggle(1000);
});

$("#Value_Meals").on('click', function () {
$('#categ3').slideToggle(1000);
});

$("#Groovy_Offers").on('click', function () {
$('#categ4').slideToggle(1000);
});

$("#Beef_Burger_Sandwiches").on('click', function () {
$('#categ5').slideToggle(1000);
});

$("#Chicken_Burgers").on('click', function () {
$('#categ6').slideToggle(1000);
});

$("#Hot_Dog").on('click', function () {
$('#categ7').slideToggle(1000);
});

// filtering selection functions """"""""""""""""""""FIRST SOLUTION"""""""""""""""""""""

if ($("#Restaurants").hover()) {
    $("#Restaurants").on('click',function(){
    $(".cardRestaurants").show();
    $(".cardBakeries").hide();
    $(".cardMarkets").hide();
    $("#span1").hide();
    
    })
} 
if ($("#Bakeries").hover()) {
    $("#Bakeries").on ('click',function(){
    $(".cardBakeries").show();
    $(".cardRestaurants").hide();
    $(".cardMarkets").hide();
    $("#span1").hide();

    })
}
if ($("#Markets").hover()) {
    $("#Markets").on ('click',function(){
    $(".cardMarkets").show();
    $(".cardBakeries").hide();
    $(".cardRestaurants").hide();
    $("#span1").hide();
    })
}
// filtering selection functions """"""""""""""SECOND SOLUTION"""""""""""""""""""
// filterSelection("all")
//                 function filterSelection(c) {
//                     var x, i;
//                     x = document.getElementsByClassName("filterDiv");
//                     if (c == "all") c = "";
//                     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//                     for (i = 0; i < x.length; i++) {
//                         w3RemoveClass(x[i], "show");
//                         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//                     }
//                 }

//                 // Show filtered elements
//                 function w3AddClass(element, name) {
//                     var i, arr1, arr2;
//                     arr1 = element.className.split(" ");
//                     arr2 = name.split(" ");
//                     for (i = 0; i < arr2.length; i++) {
//                         if (arr1.indexOf(arr2[i]) == -1) {
//                             element.className += " " + arr2[i];
//                         }
//                     }
//                 }

//                 // Hide elements that are not selected
//                 function w3RemoveClass(element, name) {
//                     var i, arr1, arr2;
//                     arr1 = element.className.split(" ");
//                     arr2 = name.split(" ");
//                     for (i = 0; i < arr2.length; i++) {
//                         while (arr1.indexOf(arr2[i]) > -1) {
//                             arr1.splice(arr1.indexOf(arr2[i]), 1);
//                         }
//                     }
//                     element.className = arr1.join(" ");
//                 }

//                 // Add active class to the current control button (highlight it)
//                 var btnContainer = document.getElementById("myBtnContainer");
//                 var btns = btnContainer.getElementsByClassName("btn");
//                 for (var i = 0; i < btns.length; i++) {
//                     btns[i].addEventListener("click", function () {
//                         var current = document.getElementsByClassName("active");
//                         current[0].className = current[0].className.replace(" active", "");
//                         this.className += " active";
//                     });
//                 }