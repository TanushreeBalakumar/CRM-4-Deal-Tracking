console.log("Advanced CRM Loaded");

// Counter animation
document.querySelectorAll(".counter").forEach(counter => {
  let start = 0;
  const end = +counter.dataset.target;
  const interval = setInterval(() => {
    start++;
    counter.innerText = start;
    if (start >= end) clearInterval(interval);
  }, 20);
});

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
document.getElementById("themeToggle").addEventListener("click", toggleTheme);