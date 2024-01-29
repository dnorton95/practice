function pizzaOven(name, crust, sauce, cheese, toppings){
    var pizza = {};
    pizza.name = name;
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza
}

var pizza1 = pizzaOven("The Chicago Ninja","deep dish" , "traditional", ["mozzarella"], ["pepperoni" , "sausage"]);
console.log(pizza1)

var pizza2 = pizzaOven("The New York Ninja","hand tossed", "marinara" , ["mozaralla", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2)

var pizza3 = pizzaOven("The Hawaiian Ninja", "thin crust", "traditional", "mozarella", ["ham", "pineapple", "bacon bits"]);
console.log(pizza3)

var pizza4 = pizzaOven("The Italian Ninja", "hand tossed", "marinara", "mozarella", ["fresh basil", "minced garlic", "parmesan","olive oil","chili flakes"]);
console.log(pizza4)
