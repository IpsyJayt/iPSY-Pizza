// USER INTERFACE LOGIC
$(document).ready(function(){
    $('.pizza-name1').click(function(){
        $('.description1').slideToggle()
    });
    $('.pizza-name2').click(function(){
        $('.description2').slideToggle()
    });
    $('.pizza-name3').click(function(){
        $('.description3').slideToggle()
    });
    $('.pizza-name4').click(function(){
        $('.description4').slideToggle()
    });
});
// COLLECT DATA FROM USER
var pizzaName = document.getElementById('pizzaName').value;
var pizzaSize = document.getElementById('sizeOfPizza').value;
var pizzaTopping = document.getElementById('topping').value;
var pizzaCrust = document.getElementById('crust').value;
var pizzaNumber = document.getElementById('number');
var pizzaDelivery = document.getElementById('delivery').value;