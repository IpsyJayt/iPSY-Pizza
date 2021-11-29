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



function yourOrder(){
    // COLLECT DATA FROM USER
var pizzaName = document.getElementById('pizzaName').value;
var pizzaSize = document.getElementById('sizeOfPizza').value;
var pizzaTopping = document.getElementById('topping').value;
var pizzaCrust = document.getElementById('crust').value;
var pizzaNumber = parseInt(document.getElementById('number').value);
var pizzaDelivery = document.getElementById('delivery').value;

    var pizzaOrder = "Your order is " + pizzaNumber + " "+ pizzaSize +" "+ pizzaName
    alert(pizzaOrder);
    // business logic

    if(pizzaSize=="small"){
        var sizePrice= 400
    } else if (pizzaSize=="medium"){
        sizePrice=500
    }else if(pizzaSize=="large"){
        sizePrice=700
    };
    if (pizzaTopping == "none"){
        var toppingPrize = 0
    } else if (pizzaTopping=="Pineapple toppings"){
        toppingPrize=150
    }else if (pizzaTopping=="Onions toppings"){
        toppingPrize = 100
    } else if (pizzaTopping == "Bacon toppings"){
        toppingPrize = 200
    };
    if(pizzaCrust=="Gluten free"){
        var crustPrize= 150
    } else if(pizzaCrust=="Crispy"){
        crustPrize=200
    } else if(pizzaCrust=="Stuffed"){
        crustPrize == 250
    };
    var total = (sizePrice + toppingPrize + crustPrize)*pizzaNumber
    if(pizzaDelivery=="yes"){
        const deliveryFee=100
        var deliveryLocation = prompt("Enter Delivery Location")
        alert("Your order of " +pizzaNumber+" "+ pizzaSize+" "+pizzaCrust+" "+ pizzaName +" "+" with " + pizzaTopping + " costs " + total+ " and will be delivered to " + deliveryLocation+ " at a delivery fee of "+ deliveryFee)
    }else {
        alert ("Pick your " + pizzaNumber+ " "+pizzaCrust+" "+pizzaName+ " with " +pizzaTopping+ " at iPSY Pizza")
    }

}