// Business Logic
function Pizza(pizzaSize, topping, qty) {  // parameters
  this.pizzaSize = pizzaSize;  // properties
  this.topping = topping;
  this.qty = qty;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 8;  // small pizza with only cheese topping

  if (this.pizzaSize === "Small") {
    return (pizzaPrice);
  } else if (this.pizzaSize === "Medium") {
    return (pizzaPrice + 2);
  } else if (this.pizzaSize === "Large") {
    return (pizzaPrice + 4);
  } else {

  }
}









// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {

//   });
// });
