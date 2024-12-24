document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const thankYouName = document.getElementById("thankYouName");

  const previewName = document.getElementById("previewName");
  const previewEmail = document.getElementById("previewEmail");
  const previewContact = document.getElementById("previewContact");
  const previewEvent = document.getElementById("previewEvent");
  const previewNotes = document.getElementById("previewNotes");

  if (form) {
    // Real-time preview update
    form.addEventListener("input", () => {
      previewName.textContent = form.fullName.value || "N/A";
      previewEmail.textContent = form.email.value || "N/A";
      previewContact.textContent = form.contactNumber.value || "N/A";
      previewEvent.textContent = form.eventType.value || "N/A";
      previewNotes.textContent = form.notes.value || "N/A";
    });

    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission behavior

      // Validate fields
      if (!form.fullName.value.trim()) {
        alert("Please enter your full name.");
        return;
      }
      if (!form.email.value.trim() || !validateEmail(form.email.value)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!form.contactNumber.value.trim() || !validateContactNumber(form.contactNumber.value)) {
        alert("Please enter a valid contact number.");
        return;
      }

      // Show Thank You message
      thankYouName.textContent = form.fullName.value;
      thankYouMessage.classList.remove("hidden");
      form.classList.add("hidden");
    });
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactNumber(number) {
  const contactRegex = /^\d{10}$/; // 10 digits are required
  return contactRegex.test(number);
}
