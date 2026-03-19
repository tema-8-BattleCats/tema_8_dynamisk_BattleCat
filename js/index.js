const endpoint = "https://dummyjson.com/products/categories";
const categoryContainer = document.querySelector(".categories_container");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}
function showData(data) {
  let categories = [data[6], data[10], data[13], data[16]];
  categories.forEach((category) => {
    categoryContainer.innerHTML += `<section class="category_container">
          <img src="IMG/cat_computer.webp" alt="picture of product">
          <a class="secondary_btn btn" href="productlist.html?category=${category.name}"><span class="btn_label">${category.name}</span></a>
        </section>`;
  });
}
getData();
