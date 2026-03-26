const products = [
  {name: "Aloe Vera Face Wash", price: 120, img: "facewash.jpg", category: "skin"},
  {name: "Neem Face Wash", price: 110, img: "facewash2.jpg", category: "skin"},
  {name: "Rose Face Cream", price: 150, img: "cream.jpg", category: "skin"},
  {name: "Sunscreen SPF 30", price: 220, img: "sunscreen.jpg", category: "skin"},
  {name: "Face Pack Multani Mitti", price: 130, img: "facepack.jpg", category: "skin"},

  {name: "Hair Oil Amla", price: 180, img: "oil.jpg", category: "hair"},
  {name: "Coconut Hair Oil", price: 200, img: "coconut.jpg", category: "hair"},
  {name: "Herbal Shampoo", price: 160, img: "shampoo.jpg", category: "hair"},
  {name: "Conditioner Smooth", price: 170, img: "conditioner.jpg", category: "hair"},
  {name: "Anti Hair Fall Shampoo", price: 190, img: "hairfall.jpg", category: "hair"},

  {name: "Lipstick Red", price: 250, img: "lipstick.jpg", category: "makeup"},
  {name: "Foundation Cream", price: 350, img: "foundation.jpg", category: "makeup"},
  {name: "Face Powder", price: 180, img: "powder.jpg", category: "makeup"},
  {name: "Kajal Black", price: 90, img: "kajal.jpg", category: "makeup"},
  {name: "Nail Polish", price: 120, img: "nailpolish.jpg", category: "makeup"},

  {name: "Bath Soap Neem", price: 40, img: "soap.jpg", category: "personal"},
  {name: "Body Lotion", price: 200, img: "lotion.jpg", category: "personal"},
  {name: "Hand Wash", price: 90, img: "handwash.jpg", category: "personal"},
  {name: "Toothpaste Dant Kanti", price: 60, img: "toothpaste.jpg", category: "personal"},
  {name: "Face Scrub", price: 140, img: "scrub.jpg", category: "personal"}
];

function showProducts(category = "all") {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  let filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  filtered.forEach(p => {
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

{name: "New Product", price: 250, img: "new.jpg", category: "skin"}
