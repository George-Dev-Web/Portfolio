// Select the toggle switch and mode text
const toggleSwitch = document.getElementById("darkModeToggle");

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
}

// Check for dark mode preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
  toggleSwitch.checked = true; // Keep the toggle switch checked
}

// Listen for toggle switch changes
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
