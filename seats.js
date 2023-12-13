document.addEventListener("DOMContentLoaded", function () {
    const seatContainer = document.querySelector(".seat-container");
    const totalSeats = 20; // Change this to the number of seats you have

    // Create seat buttons
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement("button");
        seat.classList.add("seat");
        seat.textContent = i;

        // Add click event listener to toggle booked/unbooked
        seat.addEventListener("click", function () {
            seat.classList.toggle("booked");
        });

        seatContainer.appendChild(seat);
    }
});