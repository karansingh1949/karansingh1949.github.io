const products = [
  {name: "Aloe Vera Face Wash", price: 120, img: "facewash.jpg"},
  {name: "Neem Face Wash", price: 110, img: "facewash2.jpg"},
  {name: "Rose Face Cream", price: 150, img: "cream.jpg"},
  {name: "Hair Oil", price: 180, img: "oil.jpg"},
  {name: "Shampoo", price: 160, img: "shampoo.jpg"},
  {name: "Soap", price: 40, img: "soap.jpg"},
  {name: "Body Lotion", price: 200, img: "lotion.jpg"},
  {name: "Face Pack", price: 130, img: "facepack.jpg"}
];

function showProducts() {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" width="120">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="buyNow()">Buy Now</button>
      </div>
    `;
  });
}

function buyNow() {
  window.open("https://wa.me/917023537535", "_blank");
}
