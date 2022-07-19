if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeItemButtons = document.getElementsByClassName("remove");
  for (i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInput = document.getElementsByClassName("count");
  for (i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("CartContainer")[0];
  var cartItems = cartItemContainer.getElementsByClassName("Cart-Items");
  var total = 0;
  for (i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];
    var priceItem = cartItem.getElementsByClassName("amount")[0];
    var quantityItem = cartItem.getElementsByClassName("count")[0];
    var price = parseFloat(priceItem.innerText.replace("$", ""));
    var quantity = quantityItem.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-amount")[0].innerText = "$" + total;
}

function like() {
  var likedImages = document.getElementsByClassName("like");
  for (i = 0; i < likedImages.length; i++) {
    var image = likedImages[i];
    image.addEventListener("click", changeImage);
  }
}

function changeImage(event) {
  var imageClicked = event.target;
  var parent = imageClicked.parentElement;
  console.log("hello");
  const newImage = document.createElement("img");
  newImage.src = "images/like.png";
  newImage.style.height= "30px";
  parent.appendChild(newImage);
  imageClicked.remove();
}
