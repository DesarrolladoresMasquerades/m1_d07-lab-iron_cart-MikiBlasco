// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span").textContent
  let quantity = product.querySelector(".quantity input").value
  let subtotal = product.querySelector(".subtotal span").innerHTML = price*quantity
  return subtotal
}

function calculateAll() {

  const eachProductsSubtotal = Array.from(document.querySelectorAll('.product'))
  eachProductsSubtotal.forEach(element=> updateSubtotal(element))

 const total = eachProductsSubtotal.reduce((acc, curr)=>{
    return acc += updateSubtotal(curr)
 },0)
 console.log(total)
 document.querySelector("#total-value span").textContent = total
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
