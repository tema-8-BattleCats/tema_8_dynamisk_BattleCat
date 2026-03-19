const productId = new URLSearchParams(window.location.search).get("product");
const endpoint = `https://dummyjson.com/products/${productId}`;
const container = document.querySelector("main");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
  container.innerHTML = `<section class="product_container section_container">
        <div class="product_id">
          <h3>${data.title}</h3>
          <p>${data.id} produkt id</p>
          <div class="star_container">
            <img
              src="IMG/star_green.png
          "
              alt="image of a green star"
            />
            <img
              src="IMG/star_green.png
          "
              alt="image of a green star"
            />
            <img
              src="IMG/star_green.png
          "
              alt="image of a green star"
            />
            <img
              src="IMG/star_white.png
          "
              alt="image of a white star"
            />
            <img
              src="IMG/star_white.png
          "
              alt="image of a white star"
            />
          </div>
        </div>
      </section>

      <section>
        <section class="image_price_container">
          <img src="${data.images[0]}" alt="image of computer" />

          <div class="price_container container">
            <h3 class="price_productdetails">DKK ${data.price} ,-</h3>
            <h3>You can save ${data.discountPercentage}% right now</h3>
            <div class="cta_group">
              <a class="primary_btn btn btn_buy" href="/">Buy now</a>
              <a class="secondary_btn btn btn_basket" href="/">Put in basket</a>
            </div>
          </div>
        </section>

        <section class="about_specs_container container">
          <section class="about">
            <h3>About the product</h3>
            <p>
              ${data.description}
            </p>
          </section>

          <section class="specs">
            <h3>Specifications</h3>
            <p>Apple M5 Chip 10c CPU/10c GPU</p>
            <p>Apple M5 Chip 10c CPU/10c GPU</p>
            <p>Apple M5 Chip 10c CPU/10c GPU</p>
            <p>Apple M5 Chip 10c CPU/10c GPU</p>
            <p>Apple M5 Chip 10c CPU/10c GPU</p>
          </section>
        </section>
      </section>

      <section class="customers_liked section_container">
        <h1 id="customers_underline">Customers also liked</h1>
        <section class="customers_liked_product_container">
          <section class="customers_liked_product container">
            <img src="IMG/cat_computer.webp" alt="picture of product" />
            <h2>iphone 17</h2>
            <h3>12.000,-</h3>
          </section>
          <section class="customers_liked_product container">
            <img src="IMG/cat_computer.webp" alt="picture of product" />
            <h2>iphone 17</h2>
            <h3>12.000,-</h3>
          </section>
          <section class="customers_liked_product container">
            <img src="IMG/cat_computer.webp" alt="picture of product" />
            <h2>iphone 17</h2>
            <h3>12.000,-</h3>
          </section>
        </section>
      </section>`;
}
getData();
