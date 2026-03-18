const urlcategory = new URLSearchParams(window.location.search).get("category");
const container = document.querySelector(".product_card_container");
const endpoint = `https://dummyjson.com/products/category/?category=${urlcategory}`;

console.log(endpoint);
