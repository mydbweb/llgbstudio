const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "" : "dark";

  if (nextTheme) {
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  } else {
    delete root.dataset.theme;
    localStorage.removeItem("theme");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
