
// Küçük bir animasyon efekti: sayfa yüklendiğinde fade-in uygula
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = 'opacity 1s ease-in';
      card.style.opacity = 1;
    }, 300);
  });
});
