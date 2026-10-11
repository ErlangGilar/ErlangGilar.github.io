const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themePreference = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Aktifkan tema terang" : "Aktifkan tema gelap");
  themeMeta.setAttribute("content", theme === "dark" ? "#171817" : "#f7f6f2");
}

setTheme(themePreference || (prefersDark ? "dark" : "light"));
themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
