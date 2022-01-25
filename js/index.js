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
  const toRemove= target.parentNode.parentNode
  toRemove.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector(".product").cloneNode(true)
  const newPrice = document.querySelector(".create-product td input[type=number]").value
  const newName = document.querySelector(".create-product td input[type=text]").value
  newProduct.querySelector(".name span").innerText = newName
  newProduct.querySelector(".price span").innerText = newPrice

  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);

  document.querySelector("tbody").appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(element => element.addEventListener('click', removeProduct))

  const newProductCreate = document.getElementById('create');
  newProductCreate.addEventListener('click', createProduct);
});
