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
// filtering selection functions
if ($("#Restaurants").hover()) {
    $("#Restaurants").on('click',function(){
    $(".cardRestaurants").show();
    $(".cardBakeries").hide();
    $(".cardMarkets").hide();
    })
} 
if ($("#Bakeries").hover()) {
    $("#Bakeries").on ('click',function(){
    $(".cardBakeries").show();
    $(".cardRestaurants").hide();
    $(".cardMarkets").hide();
    })
}
if ($("#Markets").hover()) {
    $("#Markets").on ('click',function(){
    $(".cardMarkets").show();
    $(".cardBakeries").hide();
    $(".cardRestaurants").hide();
    })
}
// $("#Restaurants").on ('click', function () {
//     $(".cardBakeries").hide();
//     $(".cardMarkets").hide();
// });
// $("#Bakeries").on ('click', function () {
//     $(".cardRestaurants").hide();
//     $(".cardMarkets").hide();
// });
// $("#Markets").on ('click', function () {
//     $(".cardBakeries").hide();
//     $(".cardRestaurants").hide();
// });
