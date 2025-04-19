window.onload = () => {
    Particles.init({
      selector: '.background',
      color: ['#fff', '#14213d'],
      connectParticles: false,
      maxParticles: 100,
      speed: 1,
    });
  
    const body = document.body;
    const header = document.querySelector('header');
  
    const switchDesktop = document.getElementById('theme-switch-desktop');
    const switchMobile = document.getElementById('theme-switch-mobile');
    function applyTheme(isDark) {
      if (isDark) {
        body.classList.remove('bg-fuchsia-400');
        body.classList.add('bg-cyan-950');
        header.classList.remove('bg-cyan-950');
        header.classList.add('bg-fuchsia-400');
      } else {
        body.classList.remove('bg-cyan-950');
        body.classList.add('bg-fuchsia-400');
        header.classList.remove('bg-fuchsia-400');
        header.classList.add('bg-cyan-950');
      }
  
      
      switchDesktop.checked = isDark;
      switchMobile.checked = isDark;
    }
    const isDarkInitial = body.classList.contains('bg-cyan-950');
    applyTheme(isDarkInitial);
    switchDesktop.addEventListener('change', () => {
      applyTheme(switchDesktop.checked);
    });
  
    switchMobile.addEventListener('change', () => {
      applyTheme(switchMobile.checked);
    });
  };

  document.getElementById('mobile-ranking-btn').addEventListener('click', () => {
    const leaderboard = document.getElementById('mobile-leaderboard');
    leaderboard.classList.toggle('hidden');
  });


  