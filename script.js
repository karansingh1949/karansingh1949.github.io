const products = [
  // SKIN CARE
  {name: "Patanjali Aloe Vera Face Wash", price: 120, img: "https://source.unsplash.com/300x300/?facewash", category: "skin"},
  {name: "Neem Face Wash", price: 110, img: "https://source.unsplash.com/300x300/?neem-facewash", category: "skin"},
  {name: "Rose Face Cream", price: 150, img: "https://source.unsplash.com/300x300/?face-cream", category: "skin"},
  {name: "Sunscreen SPF 30", price: 220, img: "https://source.unsplash.com/300x300/?sunscreen", category: "skin"},
  {name: "Multani Mitti Face Pack", price: 130, img: "https://source.unsplash.com/300x300/?face-pack", category: "skin"},

  // HAIR CARE
  {name: "Amla Hair Oil", price: 180, img: "https://source.unsplash.com/300x300/?hair-oil", category: "hair"},
  {name: "Coconut Oil", price: 200, img: "https://source.unsplash.com/300x300/?coconut-oil", category: "hair"},
  {name: "Herbal Shampoo", price: 160, img: "https://source.unsplash.com/300x300/?shampoo", category: "hair"},
  {name: "Hair Conditioner", price: 170, img: "https://source.unsplash.com/300x300/?conditioner", category: "hair"},
  {name: "Anti Hair Fall Shampoo", price: 190, img: "https://source.unsplash.com/300x300/?hairfall", category: "hair"},

  // MAKEUP
  {name: "Red Lipstick", price: 250, img: "https://source.unsplash.com/300x300/?lipstick", category: "makeup"},
  {name: "Liquid Foundation", price: 350, img: "https://source.unsplash.com/300x300/?foundation-makeup", category: "makeup"},
  {name: "Face Powder", price: 180, img: "https://source.unsplash.com/300x300/?face-powder", category: "makeup"},
  {name: "Kajal Eyeliner", price: 90, img: "https://source.unsplash.com/300x300/?kajal", category: "makeup"},
  {name: "Nail Polish", price: 120, img: "https://source.unsplash.com/300x300/?nail-polish", category: "makeup"},

  // PERSONAL CARE
  {name: "Neem Soap", price: 40, img: "https://source.unsplash.com/300x300/?soap", category: "personal"},
  {name: "Body Lotion", price: 200, img: "https://source.unsplash.com/300x300/?body-lotion", category: "personal"},
  {name: "Hand Wash", price: 90, img: "https://source.unsplash.com/300x300/?handwash", category: "personal"},
  {name: "Toothpaste Dant Kanti", price: 60, img: "https://source.unsplash.com/300x300/?toothpaste", category: "personal"},
  {name: "Face Scrub", price: 140, img: "https://source.unsplash.com/300x300/?face-scrub", category: "personal"}
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
        <button onclick="buyNow('${p.name}', ${p.price})">Buy Now</button>
      </div>
    `;
  });
}

function buyNow(name, price) {
  let msg = `I want to order: ${name} (₹${price})`;
  window.open(`https://wa.me/917023537535?text=${encodeURIComponent(msg)}`, "_blank");
}
