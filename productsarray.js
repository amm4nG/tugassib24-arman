const products = [
  {
    nama: "Laptop ASUS ROG",
    harga: 15000000,
    deskripsi: "Laptop gaming dengan spesifikasi tinggi dan desain yang menarik."
  },
  {
    nama: "Smartphone Samsung Galaxy S20",
    harga: 10000000,
    deskripsi: "Smartphone canggih dengan layar AMOLED dan kamera berkualitas tinggi."
  },
  {
    nama: "Smart TV LG 55 inch",
    harga: 12000000,
    deskripsi: "TV pintar dengan resolusi Ultra HD dan fitur akses internet."
  },
  {
    nama: "Kamera Mirrorless Sony Alpha A7III",
    harga: 20000000,
    deskripsi: "Kamera dengan sensor full-frame dan kemampuan rekaman video 4K."
  },
  {
    nama: "Headphone Bose QuietComfort 35 II",
    harga: 3000000,
    deskripsi: "Headphone dengan fitur noise cancelling dan kenyamanan penggunaan yang tinggi."
  },
  {
    nama: "Mouse Gaming Logitech G502 Hero",
    harga: 700000,
    deskripsi: "Mouse gaming dengan sensor presisi tinggi dan desain ergonomis."
  }
];

let listProducts = document.getElementById('products')
for (let index = 0; index < products.length; index++) {
    listProducts.innerHTML +=`
        <div class="col">
            <div class="card">
                <img src="img/product.jpg" alt="">
                <h2>${products[index].nama}</h2>
                <p>Harga : ${products[index].harga}</p>
                <p>${products[index].deskripsi}</p>
            </div>
        </div>
    `
}

  // Function to generate random color
  function getRandomColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convert RGB to hexadecimal
    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');

    // Concatenate hexadecimal values to form color code
    var color = '#' + hexR + hexG + hexB;
    
    return color;
  }

  // Get all elements with class 'card'
  var cards = document.querySelectorAll('.card');

  // Loop through each card element and set a random background color
  cards.forEach(function(card) {
    var randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  });