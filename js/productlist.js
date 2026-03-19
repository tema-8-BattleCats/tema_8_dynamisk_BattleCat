const urlcategory = new URLSearchParams(window.location.search).get("category");
const container = document.querySelector(".product_card_container");
const endpoint = `https://dummyjson.com/products/category/${urlcategory}`;

document.querySelector(".category_title").textContent = urlcategory;
document.querySelector("#apply_filter").addEventListener("click", filter);

let allData;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      showData(allData);
    });
}

function filter(e) {
  console.log("Virker");
  const valgt = document.querySelector("select").value;
  console.log(valgt);
  if (valgt == "all") {
    showData(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    showProducts(udsnit);
  }
}

function showData(data) {
  let markup = "";
  data.products.forEach((product) => {
    markup += `<a href="productdetails.html?product=${product.id}">
        <article class="product_card">
          <div class="thumbnail">
            <img
              src="${product.thumbnail}"
              alt="iPhone 20 Plus"
            />
          </div>

          <div>
            <h2 class="product_name">${product.title}</h2>
            <p class="brand"><span>${product.brand}</span></p>
            <!-- OBS fra H3 til P i brandnavn jf. prototype -->
            <div class="rating_container">
              <img
                class="rating"
                src="http://localhost:3845/assets/006fc72cc8a5bd479fa6ddcf1096de6687b79a40.svg"
                alt="rating"
              />
              <p class="reviews">(${product.reviews.length} reviews)</p>
            </div>
          </div>

          <p class="product_text">
            ${product.description}
          </p>
          <br />
          <div class="price">
            <p>From <span>${product.price}</span>,-</p>
          </div>
          <br />
          <div class="buttons">
            <a class="primary_btn btn" href="/">Buy</a>
            <a class="secondary_btn btn" href="/">Read more</a>
          </div>
        </article>
        </a>`;
  });
  container.innerHTML = markup;
}

getData();
