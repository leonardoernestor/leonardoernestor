document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      // Verifica se o menu está aberto mudando o atributo de acessibilidade
      const estahAberto = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Alterna o estado
      menuToggle.setAttribute('aria-expanded', !estahAberto);
      navLinks.classList.toggle('active');
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (para rolar até a seção)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
      });
    });
  }
});
