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

 // --- User Toggle (profil dropdown) ---
 const userBtn = document.getElementById('user-toggle-btn');
 const userCard = document.getElementById('user-card');

 if (userBtn && userCard) {
   userBtn.addEventListener('click', () => {
     userCard.classList.toggle('opacity-0');
     userCard.classList.toggle('pointer-events-none');
   });

   // Fermer si clic dehors
   document.addEventListener('click', (e) => {
     if (!userBtn.contains(e.target) && !userCard.contains(e.target)) {
       userCard.classList.add('opacity-0');
       userCard.classList.add('pointer-events-none');
     }
   });
 }
};

 // Gestion du profile (desktop)
 const profileIcon = document.getElementById("profile-icon");
 const profileBox = profileIcon?.nextElementSibling;

 if (profileIcon && profileBox) {
   profileIcon.addEventListener("click", () => {
     const isVisible = profileBox.classList.contains("opacity-100");
     profileBox.classList.toggle("opacity-0", isVisible);
     profileBox.classList.toggle("opacity-100", !isVisible);
   });
 }

 // Gestion de l'user info mobile
 const toggleUserInfo = document.getElementById("toggle-user-info");
 const userInfoMobile = document.getElementById("user-info-mobile");

 toggleUserInfo?.addEventListener("click", () => {
   userInfoMobile.classList.toggle("hidden");
 });