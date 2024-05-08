const userFound = JSON.parse(localStorage.getItem("userInfo"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length;
}

function calculateTotalAmount() {
  let total = 0;
  if (cart.length > 0) {
    cart.forEach((element) => {
      total = total + element.discountedPrice;
    });
  }
  return total;
}

function deleteItem(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let updatedCart = cart.filter((cartItem) => {
    return cartItem.id !== item.id;
  });

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  updateCartCount();
  removeItemFromDisplay(item);
  updateTotalAmount();
}

function removeItemFromDisplay(item) {
  let cartItems = document.querySelectorAll(".product");
  cartItems.forEach((cartItem) => {
    let itemId = cartItem.dataset.itemId;
    if (itemId === item.id) {
      cartItem.remove();
    }
  });
  window.location.reload();
}

if (!userFound) {
  window.location.href = "login.html";
} else {
  // add cart data to this div
  let cartContainer = document.getElementById("cartContainer");

  let productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("productInfoDiv");

  let priceInfoDiv = document.createElement("div");
  priceInfoDiv.classList.add("priceInfoDiv");

  let couponDiv = document.createElement("div");
  couponDiv.classList.add("couponDiv");

  let totalItems = document.createElement("h2");
  totalItems.id = "totalItems";
  totalItems.textContent = `Total items in cart: ${cart.length}`;

  let totalAmount = document.createElement("h2");
  totalAmount.id = "totalAmount";
  function updateTotalAmount() {
    totalAmount.textContent = `Total Amount: ${calculateTotalAmount()}`;
  }

  let enterCouponDiv = document.createElement("div");
  enterCouponDiv.classList.add("enterCouponDiv");

  let enterCoupon = document.createElement("input");
  enterCoupon.classList.add("enterCoupon");
  enterCoupon.placeholder = "Enter Coupon code";

  let applyCoupon = document.createElement("button");
  applyCoupon.classList.add("applyCoupon");
  applyCoupon.textContent = "Apply Coupon";

  applyCoupon.addEventListener("click", applyCuoponCode);

  function applyCuoponCode() {
    let enteredCoupon = enterCoupon.value.trim();

    if (cart.length < 1) {
      alert("Please add a product to your cart & try again");
      return;
    }

    if (enteredCoupon === "") {
      alert("Please enter a Coupon code");
      return;
    }

    if (enteredCoupon === "Masai15") {
      let totalAmount = calculateTotalAmount();
      let discountedAmount = totalAmount * 0.15;
      totalAmount -= discountedAmount;
      updateBillAmount(totalAmount);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid Coupon code");
    }
  }

  enterCouponDiv.appendChild(enterCoupon);
  enterCouponDiv.appendChild(applyCoupon);

  let billAmountDiv = document.createElement("h1");
  billAmountDiv.classList.add("billAmountDiv");
  billAmountDiv.textContent = "Bill Amount: " + calculateTotalAmount();

  document.body.appendChild(billAmountDiv);

  function updateBillAmount(amount) {
    billAmountDiv.textContent = "Bill Amount: " + amount;
  }

  priceInfoDiv.appendChild(totalItems);
  priceInfoDiv.appendChild(totalAmount);
  couponDiv.appendChild(enterCouponDiv);
  couponDiv.appendChild(billAmountDiv);

  productInfoDiv.appendChild(priceInfoDiv);
  productInfoDiv.appendChild(couponDiv);

  // mapping
  let cartProducts = document.createElement("div");
  cartProducts.classList.add("cartProducts");

  const productDivs = cart.map((item) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let img = document.createElement("img");
    img.classList.add("productImg");
    img.src = item.img;
    img.alt = item.name;

    let productName = document.createElement("p");
    productName.classList.add("productName");
    productName.textContent = item.name;

    let priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    let originalPrice = document.createElement("p");
    originalPrice.classList.add("originalPrice");
    originalPrice.textContent = item.originalPrice;

    let discountedPrice = document.createElement("p");
    discountedPrice.classList.add("discountedPrice");
    discountedPrice.textContent = item.discountedPrice;

    let removeFromCartDiv = document.createElement("button");
    removeFromCartDiv.textContent = "Remove from cart";
    removeFromCartDiv.classList.add("remove-from-cart");

    removeFromCartDiv.addEventListener("click", () => {
      deleteItem(item);
    });

    imgContainer.appendChild(img);
    priceContainer.appendChild(discountedPrice);
    priceContainer.appendChild(originalPrice);

    productDiv.appendChild(imgContainer);
    productDiv.appendChild(productName);
    productDiv.appendChild(priceContainer);
    productDiv.appendChild(removeFromCartDiv);

    return productDiv;
  });

  cartContainer.appendChild(productInfoDiv);

  productDivs.forEach((productDiv) => {
    cartProducts.appendChild(productDiv);
  });

  cartContainer.appendChild(cartProducts);

  updateCartCount();
  updateTotalAmount();
}
