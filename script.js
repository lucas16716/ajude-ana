// Alternância de idioma (PT / EN)
function toggleMenu() {
  const menu = document.getElementById("lang-menu");
  menu.classList.toggle("show");
}

// Fecha se clicar fora
document.addEventListener("click", function (event) {
  const menu = document.getElementById("lang-menu");
  const toggle = document.querySelector(".lang-toggle");
  if (!toggle.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("show");
  }
});

// Troca de idioma no conteúdo do site
function changeLanguage(lang) {
  const currentLang = document.getElementById("current-lang");
  currentLang.textContent = lang.toUpperCase();

  // Troca os blocos de idioma visíveis
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
  });

  // Atualiza o título principal
  const title = document.getElementById("main-title");
  if (title) {
    title.textContent =
      lang === "pt" ? "Ajude Ana Luiza 💜" : "Help Ana Luiza 💜";
  }

  // Atualiza o texto de rodapé
  const footerText = document.getElementById("footer-text");
  if (footerText) {
    // Atualiza apenas o texto antes do link
    footerText.childNodes[0].textContent =
      lang === "pt"
        ? "Desenvolvido com amor e nas melhores intenções por "
        : "Developed with love and the best intentions by ";
  }

  // Fecha o menu após selecionar
  document.getElementById("lang-menu").classList.remove("show");
}

// Embaralha a galeria (simples aleatorização na inicialização)
window.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const images = Array.from(gallery.children);
  const shuffled = images.sort(() => 0.5 - Math.random());
  gallery.innerHTML = "";
  shuffled.forEach((img) => gallery.appendChild(img));
});
