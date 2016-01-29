// Business Logic
function Pizza(pizzaSize, toppings, qty) {  // parameters: toppings is an array
  this.pizzaSize = pizzaSize;  // properties
  this.toppings = toppings;
  this.qty = qty;
}

Pizza.prototype.pickedToppings = function() {
  var toppingsList = "";
  var numberOfToppings = 0;   // The doesn't need to be here, but spec breaks if it's removed

  for (var i = 0; i < this.toppings.length; i++) {
    if (i === 0) {
      toppingsList += this.toppings[i];
      numberOfToppings += 1;
    } else {
      toppingsList += (", " + this.toppings[i]);
    };
  }
  return toppingsList;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 8;  // small pizza with only cheese topping

  if (this.pizzaSize === "Small") {
    return ((pizzaPrice) + (this.toppings.length * 2));
  } else if (this.pizzaSize === "Medium") {
    return ((pizzaPrice + 2) + (this.toppings.length * 2));
  } else if (this.pizzaSize === "Large") {
    return ((pizzaPrice + 4) + (this.toppings.length * 2));
  } else {

  }
}









// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {
    var toppings = [];
        $("select").each(function() {
          if ($(this).val() === "yes") {
            likes.push($(this).attr('id'));
          }
        });

//     event.preventDefault();
//   });
// });
