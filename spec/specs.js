describe('Pizza', function(){
  it("will let user order a large pizza", function(){
    var testPizza = new Pizza("Large", ["Pepperoni"], 1)
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.toppings).to.eql(["Pepperoni"]);
    expect(testPizza.qty).to.equal(1);
  });

  it("will list the toppings added by user", function() {
    var testPizza = new Pizza("Large", ["Pepperoni", "Olives", "Sausage"], 1);
    expect(testPizza.pickedToppings()).to.equal("Pepperoni, Olives, Sausage");
  });

  it("will create a $10 receipt if pizza is Medium size", function() {
    var testPizza = new Pizza("Medium", [], 1)
    expect(testPizza.price()).to.equal(10);  // we are looking for price
  });

  it("will create a $16 receipt if pizza is Large size with two extra toppings", function() {
    var testPizza = new Pizza("Large", ["Pepperoni", "Olives"], 1);
    expect(testPizza.price()).to.equal(16);  // toppings are $2 each
  });


});

// specs
// constructor
// it will let user order size
// it will let user order one topping
// it will let user order two toppings


// user can order a pizza and see the final cost.
// user to choose toppings and size
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen.
// ** allow users to order more than one pizza with different toppings
// ** display the list of pizzas ordered as links that can be clicked for details
// ** offer a delivery option that then requires address information
