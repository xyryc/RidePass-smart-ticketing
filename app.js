const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");

let selectedSeat = [];

function handleSelectSeat(event) {
  console.log(event.innerText);

  event.classList.add("bg-primary");
  event.classList.add("text-white");
  event.classList.remove("hover:bg-secondary");

  selectedSeat.push(event.innerText);
  totalBookedEl.innerText = selectedSeat.length

    selectedSeatEl.innerHTML = `<li class="text-base font-normal flex justify-between">
          <span>${event.innerText}</span>
          <span>Economy</span>
          <span>550</span>
      </li>`;
}
