const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
  const value = event.innerText;

  if (selectedSeat.includes(value)) {
    return alert("Seat Already Booked!");
  } else if(selectedSeat.length < 4) {
    event.classList.add("bg-primary", "hover:bg-primary", "text-white");
    event.classList.remove("hover:bg-secondary");

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;

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
  }else{
    return alert("Maximum Seat Booked!")
  }
}
