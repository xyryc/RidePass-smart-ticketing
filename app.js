const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");
const defualtTextEl = document.getElementById("default-text");
const grandTotalEl = document.getElementById("grand-total");
const phoneNumberEl = document.getElementById("phone-number");
const nextButtonEl = document.getElementById("next-btn");

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
  const value = event.innerText;

  if (selectedSeat.includes(value)) {
    return alert("Seat Already Booked!");
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-primary", "hover:bg-primary", "text-white");
    event.classList.remove("hover:bg-secondary");

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;

    // remove default text
    defualtTextEl.classList.add("hidden");

    selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>`;

    // update total price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // active coupon button
    if (selectedSeat.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    return alert("Maximum Seat Booked!");
  }
}

document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInputValue = couponInputEl.value;
  console.log(typeof couponInputValue);
  let couponSave = 0;

  if (couponInputValue !== "NEW50" && couponInputValue !== "Couple 20") {
    alert("Your provided coupon is not valid!");
    return;
  }

  if (couponInputValue === "NEW50") {
    couponSave = totalPrice * 0.15;
  } else if (couponInputValue === "Couple 20") {
    couponSave = totalPrice * 0.2;
  }

  const showCouponPriceEl = document.getElementById("show-coupon-price");
  showCouponPriceEl.innerHTML = ` <p>Discount</p>
   <p><span>-BDT</span>
    <span>${couponSave.toFixed(2)}</span>
    </p>`;

  const grandTotalValue = totalPrice - couponSave;
  grandTotalEl.innerText = grandTotalValue.toFixed(2);

  // if (couponInputValue === "NEW50") {
  //   couponSave = totalPrice * 0.15;
  //   const grandTotalValue = totalPrice - couponSave;
  //   grandTotalEl.innerText = grandTotalValue.toFixed(2);
  // } else if (couponInputValue === "Couple 20") {
  //   couponSave = totalPrice * 0.2;
  //   const grandTotalValue = totalPrice - couponSave;
  //   grandTotalEl.innerText = grandTotalValue.toFixed(2);
  // } else {
  //   alert("Your provided coupon is not valid!");
  //   grandTotalEl.innerText = totalPrice;
  //   return;
  // }
});

phoneNumberEl.addEventListener("input", function (event) {
  const inputValue = event.target.value;

  if (inputValue.length >= 11) {
    nextButtonEl.removeAttribute("disabled");
  }
});

document.getElementById("btn-continue").addEventListener("click", function () {
  window.location.reload();
});

// todo: while coupon not applied or grand total price isnt active, disable the input form
