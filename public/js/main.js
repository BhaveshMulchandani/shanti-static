// Render lucide icons
if (window.lucide) window.lucide.createIcons();

// Mobile menu toggle
document.querySelectorAll('[data-menu-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const menu = document.querySelector('[data-menu]');
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    btn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });
});

// Before/After slider
document.querySelectorAll('[data-beforeafter]').forEach((root) => {
  const range = root.querySelector('[data-ba-range]');
  const beforeWrap = root.querySelector('[data-ba-before]');
  const divider = root.querySelector('[data-ba-divider]');
  const beforeImg = beforeWrap ? beforeWrap.querySelector('img') : null;
  if (!range) return;
  const update = (pos) => {
    beforeWrap.style.width = pos + '%';
    divider.style.left = pos + '%';
    if (beforeImg) beforeImg.style.width = (100 / (pos / 100)) + '%';
  };
  update(Number(range.value));
  range.addEventListener('input', (e) => update(Number(e.target.value)));
});

// const servicesBtn = document.getElementById("servicesBtn");
// const servicesMenu = document.getElementById("servicesMenu");

// servicesBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   servicesMenu.classList.toggle("active");
// });

// document.addEventListener("click", (e) => {
//   if (
//     !servicesBtn.contains(e.target) &&
//     !servicesMenu.contains(e.target)
//   ) {
//     servicesMenu.classList.remove("active");
//   }
// });

const services = {

Dental: [
"Dental Implant",
"Root Canal Treatment",
"Teeth Cleaning",
"Braces",
"Tooth Extraction"
],

Aesthetic: [
"Skin Consultation",
"PRP Treatment",
"Hair Consultation",
"Acne Treatment",
"Pigmentation Treatment"
]

};

// Elements

const department =
document.getElementById("department");

const service =
document.getElementById("service");

const reviewBtn =
document.getElementById("reviewBtn");

const reviewModal =
document.getElementById("reviewModal");

const closeModal =
document.getElementById("closeModal");

const finalBookBtn =
document.getElementById("finalBookBtn");

const summaryContent =
document.getElementById("summaryContent");

// Service Change

department.addEventListener(
"change",
() => {


service.innerHTML =
  '<option value="">Select Service</option>';

const selectedServices =
  services[department.value];

if (!selectedServices) return;

selectedServices.forEach(
  item => {

    const option =
      document.createElement("option");

    option.value = item;
    option.textContent = item;

    service.appendChild(option);
  }
);


}
);

// Slot Selection

let selectedSlot = "";

document
.querySelectorAll(
".slot:not(.booked)"
)
.forEach(slot => {

slot.addEventListener(
"click",
() => {


  document
  .querySelectorAll(".slot")
  .forEach(btn =>
    btn.classList.remove(
      "active"
    )
  );

  slot.classList.add(
    "active"
  );

  selectedSlot =
    slot.textContent.trim();
}

);

});

// Review Button

reviewBtn.addEventListener(
"click",
() => {

const name =
  document.getElementById("name").value;

const mobile =
  document.getElementById("mobile").value;

const age =
  document.getElementById("age").value;

const gender =
  document.getElementById("gender").value;

const date =
  document.getElementById("date").value;

const notes =
  document.getElementById("notes").value;

// Validation

if (
  !name ||
  !mobile ||
  !age ||
  !gender ||
  !department.value ||
  !service.value ||
  !date ||
  !selectedSlot
) {

  alert(
    "Please fill all required fields."
  );

  return;
}

summaryContent.innerHTML = `
  <p>
    <strong>Name:</strong>
    ${name}
  </p>

  <p>
    <strong>Mobile:</strong>
    ${mobile}
  </p>

  <p>
    <strong>Age:</strong>
    ${age}
  </p>

  <p>
    <strong>Gender:</strong>
    ${gender}
  </p>

  <p>
    <strong>Department:</strong>
    ${department.value}
  </p>

  <p>
    <strong>Service:</strong>
    ${service.value}
  </p>

  <p>
    <strong>Date:</strong>
    ${date}
  </p>

  <p>
    <strong>Time Slot:</strong>
    ${selectedSlot}
  </p>

  <p>
    <strong>Notes:</strong>
    ${notes || "N/A"}
  </p>
`;

reviewModal.style.display =
  "block";

}
);

// Close Modal

closeModal.addEventListener(
"click",
() => {


reviewModal.style.display =
  "none";

}
);

// Click Outside Modal

window.addEventListener(
"click",
e => {


if (
  e.target === reviewModal
) {

  reviewModal.style.display =
    "none";

}
}
);

// Final Booking

finalBookBtn.addEventListener(
"click",
() => {

reviewModal.style.display =
  "none";

alert(
  "Appointment booked successfully 🎉"
);

document
  .getElementById(
    "appointmentForm"
  )
  .reset();

selectedSlot = "";

document
  .querySelectorAll(".slot")
  .forEach(btn =>
    btn.classList.remove(
      "active"
    )
  );

service.innerHTML =
  '<option value="">Select Service</option>';

}
);

