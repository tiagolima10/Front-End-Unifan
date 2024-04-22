// Adiciona um event listener para o evento 'scroll' ao carregar a página
window.addEventListener('scroll', scrollFunction);

// Define a função scrollFunction para controlar a exibição do botão de scroll
function scrollFunction() {
  var scrollToTopButton = document.getElementById("scroll-to-top-button");

  // Verifica a posição do scroll
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Define a função scrollToTopSmooth para rolar suavemente até o topo
function scrollToTopSmooth() {
  const scrollStep = -window.scrollY / (150 / 15);
  
  const scrollInterval = setInterval(function(){
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  },15);
}

// Adiciona um event listener para o botão de scroll
document.getElementById("scroll-to-top-button").addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  scrollToTopSmooth();
});

  