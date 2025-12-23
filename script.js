// Automatically fill the product name in the order form

// Get the product from URL
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('product');

// If the product exists and the hidden input is on the page
const productInput = document.getElementById('product-name');
if (product && productInput) {
  productInput.value = product;
}
