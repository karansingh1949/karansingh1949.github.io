let cart = []

function addToCart(product){

cart.push(product)

alert(product + " added to cart")

localStorage.setItem("cart", JSON.stringify(cart))

}

window.onload = function(){

let items = JSON.parse(localStorage.getItem("cart"))

if(items){

let list = document.getElementById("cart-items")

items.forEach(function(item){

let li = document.createElement("li")

li.innerText = item

list.appendChild(li)

})

}

}
