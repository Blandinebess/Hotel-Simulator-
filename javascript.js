// Guest constructor function
function Guest(name, room, duration, checkInDate) {
  this.checkInDate = checkInDate || new Date().toLocaleDateString("en-US");
  this.name = name;
  this.room = room;
  this.duration = duration;
}

// Guest list array (prepopulated data)
let guests = [new Guest("Fouad", 304, 3), new Guest("Eliora", 105, 2)];

// Function to update guest list display
function updateGuestList() {
  let guestListDiv = document.getElementById("guestList");
  guestListDiv.innerHTML = "";

  guests.forEach((guest) => {
    let guestCard = document.createElement("div");
    guestCard.classList.add("guest-card");
    guestCard.innerHTML = `<strong>${guest.name}</strong> - Room ${guest.room} - ${guest.duration} days - Check-in: ${guest.checkInDate}`;
    guestCard.style.backgroundColor = "#f0f0f0";
    guestListDiv.appendChild(guestCard);
  });
}

// Function to handle check-in
document
  .getElementById("checkInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("guestName").value;
    let room = parseInt(document.getElementById("roomNumber").value);
    let duration = parseInt(document.getElementById("stayDuration").value);
    let errorMessage = document.getElementById("errorMessage");

    // Validation
    if (!name || !room || !duration) {
      errorMessage.textContent = "Please fill in all fields!";
      return;
    }

    // Room availability check
    if (guests.some((guest) => guest.room === room)) {
      errorMessage.textContent = `Room ${room} is occupied! Choose another room.`;
      return;
    }

    // Add new guest
    guests.push(new Guest(name, room, duration));

    // Update UI
    updateGuestList();
    errorMessage.textContent = "";
    this.reset();
  });

// Initial rendering
updateGuestList();
