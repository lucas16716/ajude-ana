(() => {
  "use strict";

  // --- Cache de Elementos DOM ---
  const langMenu = document.getElementById("lang-menu");
  const langToggleButton = document.querySelector(".lang-toggle");
  const currentLangDisplay = document.getElementById("current-lang");
  const allLangContent = document.querySelectorAll("[data-lang]");
  const mainTitle = document.getElementById("main-title");
  const footerTextContainer = document.getElementById("footer-text");
  const galleryContainer = document.getElementById("gallery");

  // --- Seletor de Idioma ---

  // Mostra/Esconde o menu dropdown de idiomas
  window.toggleMenu = function () {
    if (langMenu) {
      langMenu.classList.toggle("show");
      const isShown = langMenu.classList.contains("show");
      langToggleButton.setAttribute("aria-expanded", isShown); // Atualiza ARIA
    }
  };

  // Fecha o menu se clicar fora dele
  document.addEventListener("click", function (event) {
    if (langMenu && langToggleButton) {
      if (
        !langToggleButton.contains(event.target) &&
        !langMenu.contains(event.target)
      ) {
        langMenu.classList.remove("show");
        langToggleButton.setAttribute("aria-expanded", "false"); // Atualiza ARIA
      }
    }
  });

  // Troca o idioma visível na página
  window.changeLanguage = function (lang) {
    if (!lang || !["pt", "en"].includes(lang)) return; // Validação básica

    // Atualiza o texto do botão (PT/EN)
    if (currentLangDisplay) {
      currentLangDisplay.textContent = lang.toUpperCase();
    }

    // Alterna a visibilidade dos blocos de texto
    if (allLangContent.length > 0) {
      allLangContent.forEach((el) => {
        // Mantém a lógica original de style.display
        el.style.display =
          el.getAttribute("data-lang") === lang ? "block" : "none";
      });
    }

    // Atualiza o título H1
    if (mainTitle) {
      mainTitle.textContent =
        lang === "pt" ? "Ajude a Ana Luiza 💜" : "Help Ana Luiza 💜";
    }

    // Atualiza o texto do rodapé (antes do link)
    if (footerTextContainer && footerTextContainer.childNodes.length > 0) {
      // Modifica o nodeValue do primeiro nó (que é o texto)
      footerTextContainer.childNodes[0].nodeValue =
        lang === "pt"
          ? "Desenvolvido com amor e nas melhores intenções por "
          : "Developed with love and the best intentions by ";
    }

    // Fecha o menu após a seleção
    if (langMenu) {
      langMenu.classList.remove("show");
      if (langToggleButton)
        langToggleButton.setAttribute("aria-expanded", "false"); // Atualiza ARIA
    }
  };

  // --- Embaralhamento da Galeria ---

  // Função para embaralhar as imagens da galeria
  function shuffleGallery() {
    if (galleryContainer) {
      const images = Array.from(galleryContainer.children);
      // Algoritmo simples de embaralhamento (original)
      const shuffled = images.sort(() => 0.5 - Math.random());

      // Limpa e readiciona na ordem embaralhada (lógica original)
      galleryContainer.innerHTML = "";
      shuffled.forEach((img) => galleryContainer.appendChild(img));
    }
  }

  // Executa o embaralhamento quando o DOM estiver pronto
  window.addEventListener("DOMContentLoaded", shuffleGallery);
})();
