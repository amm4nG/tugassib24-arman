const dataProducts = [
  {
    nama: "Laptop ASUS ROG",
    harga: 15000000,
    deskripsi: "Laptop gaming dengan spesifikasi tinggi dan desain yang menarik.",
    image: "img/product.jpg"
},
{
    nama: "Smartphone Samsung Galaxy S20",
    harga: 10000000,
    deskripsi: "Smartphone canggih dengan layar AMOLED dan kamera berkualitas tinggi.",
    image: "img/product.jpg"
},
{
    nama: "Smart TV LG 55 inch",
    harga: 12000000,
    deskripsi: "TV pintar dengan resolusi Ultra HD dan fitur akses internet.",
    image: "img/product.jpg"
},
{
    nama: "Kamera Mirrorless Sony Alpha A7III",
    harga: 20000000,
    deskripsi: "Kamera dengan sensor full-frame dan kemampuan rekaman video 4K.",
    image: "img/product.jpg"
},
{
    nama: "Headphone Bose QuietComfort 35 II",
    harga: 3000000,
    deskripsi: "Headphone dengan fitur noise cancelling dan kenyamanan penggunaan yang tinggi.",
    image: "img/product.jpg"
},
{
    nama: "Mouse Gaming Logitech G502 Hero",
    harga: 700000,
    deskripsi: "Mouse gaming dengan sensor presisi tinggi dan desain ergonomis.",
    image: "img/product.jpg"
  }
];

let listProducts = document.getElementById('products')
let url = 'https://reqres.in/api/products'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            products: dataProducts
        })
    })
    .then((res) => res.json())
    .then((data) => {
            data.products.forEach(element => {
                listProducts.innerHTML +=`
                    <div class="col">
                        <div class="card">
                            <img src="${element.image}" alt="">
                            <h2>${element.nama}</h2>
                            <p>Harga : ${element.harga}</p>
                            <p>${element.deskripsi}</p>
                        </div>
                    </div>
                `
            });
    })
    .catch((e) => console.log(e))