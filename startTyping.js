window.onload = () => {
    // --- Background particles ---
    Particles.init({
      selector: '.background',
      color: ['#ea7af4', '#14213d'],
      connectParticles: false,
      maxParticles: 100,
      speed: 1,
    });
// --- Leaderboard Desktop ---
const desktopLeaderboardBtn = document.querySelector('.fa-ranking-star');
const desktopLeaderboardBox = document.querySelector('#leaderboard-desktop');
desktopLeaderboardBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  desktopLeaderboardBox?.classList.toggle('hidden');
});

// --- Leaderboard Mobile ---
const btnMobileLeaderboard = document.getElementById('mobile-ranking-btn');
const leaderboard = document.getElementById('mobile-leaderboard');
const closeBtn = document.getElementById('close-leaderboard');

btnMobileLeaderboard?.addEventListener('click', () => {
  leaderboard?.classList.remove('hidden');
});

closeBtn?.addEventListener('click', () => {
  leaderboard?.classList.add('hidden');
});    