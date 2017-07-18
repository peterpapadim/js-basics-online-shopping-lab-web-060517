var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var itemsInCart = []

  for (let i = 0; i < cart.length; i++){
    itemsInCart.push(`${Object.keys(cart[i])[0]} at \$${Object.values(cart[i])[0]}`)
  }

  if (itemsInCart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (itemsInCart.length == 1){
    console.log(`In your cart, you have ${itemsInCart.join()}.`)
  }
  else if (itemsInCart.length == 2){
    console.log(`In your cart, you have ${itemsInCart.join(" and ")}.`)
  }
  else {
    itemsInCart.splice(-1, 0, "and")
    var lastItem = itemsInCart.pop()
    console.log(`In your cart, you have ${itemsInCart.join(", ")} ${lastItem}.`)
    }
  }

function total() {
  var total = []
  for (let i = 0; i < cart.length; i++){
    total.push(Object.values(cart[i])[0])
  }
  var sum = 0
  for (let i = 0; i < total.length; i++){
    sum += total[i]
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (item === (Object.keys(cart[i])[0]) ){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log(  "Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

}
