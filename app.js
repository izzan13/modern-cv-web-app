// app.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("CV App initialized.");

  // Auto-update current year in footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Register service worker for PWA support
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceworker.js")
      .then(registration => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch(error => {
        console.error("Service Worker registration failed:", error);
      });
  }
});
