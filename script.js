document.addEventListener('DOMContentLoaded', () => {
  const linkBiblia = document.getElementById('link-biblia');
  const seletorBiblia = document.getElementById('seletor-biblia');

  linkBiblia.addEventListener('click', (e) => {
    e.preventDefault(); // evita o comportamento padrão do link

    // Alterna visibilidade
    if (seletorBiblia.style.display === 'none' || seletorBiblia.style.display === '') {
      seletorBiblia.style.display = 'block';
    } else {
      seletorBiblia.style.display = 'none';
    }
  });
});
