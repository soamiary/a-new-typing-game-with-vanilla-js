const words = {
    easy: ["apple", "banana", "grape", "orange", "cherry"],
    medium: ["keyboard", "monitor", "printer", "charger", "battery"],
    hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
  };
  
  const modeSelect = document.getElementById("mode");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const typingText = document.getElementById("typing-text");
  const timerDisplay = document.getElementById("timer");
  const wpmDisplay = document.getElementById("wpm");
  const accuracyDisplay = document.getElementById("accuracy");
  
  let charSpans = [];
  let currentCharIndex = 0;
  let correctChars = 0;
  let totalTyped = 0;
  let timer = 60;
  let interval;
  let started = false;
  
  function getRandomWords(mode, count = 30) {
    const list = words[mode];
    return Array.from({ length: count }, () => list[Math.floor(Math.random() * list.length)]).join(" ");
  }
  
  function loadText() {
    typingText.innerHTML = "";
    const text = getRandomWords(modeSelect.value);
    charSpans = [];
    [...text].forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "text-gray-400";
      typingText.appendChild(span);
      charSpans.push(span);
    });
  }
 

  function startGame() {
    clearInterval(interval);
    timer = 60;
    currentCharIndex = 0;
    correctChars = 0;
    totalTyped = 0;
    started = true;
    interval = null; 
  
    timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> 60s`;
    wpmDisplay.innerHTML = `<i class="fa-solid fa-gauge"></i> WPM: 0`;
    accuracyDisplay.innerHTML = `<i class="fa-solid fa-bullseye"></i> Accuracy: 0%`;
  
    loadText();
  
    startBtn.classList.add("hidden");
    restartBtn.classList.add("hidden");
  }
  
  function endGame() {
    clearInterval(interval);
    started = false;
    restartBtn.classList.remove("hidden");
  }
  
  function updateStats() {
    const wpm = Math.round((correctChars / 5) / ((60 - timer) / 60)) || 0;
    const accuracy = Math.round((correctChars / totalTyped) * 100) || 0;
    wpmDisplay.innerHTML = `<i class="fa-solid fa-gauge"></i> WPM: ${wpm}`;
    accuracyDisplay.innerHTML = `<i class="fa-solid fa-bullseye"></i> Accuracy: ${accuracy}%`;
  }
  
  document.addEventListener("keydown", e => {
    if (!started || timer <= 0) return;
  
  
    if (!interval && e.key.length === 1) {
      interval = setInterval(() => {
        timer--;
        timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${timer}s`;
        if (timer <= 0) {
          endGame();
        }
      }, 1000);
    }
  
    if (restartBtn.classList.contains("hidden")) {
      restartBtn.classList.remove("hidden");
    }
  
    if (e.key === "Backspace") {
      if (currentCharIndex > 0) {
        currentCharIndex--;
        const span = charSpans[currentCharIndex];
        if (span.classList.contains("text-white")) {
          correctChars--;
        }
        span.className = "text-gray-400";
        totalTyped--;
        updateStats();
      }
      return;
    }
  
    const expected = charSpans[currentCharIndex];
    if (!expected) return;
  
    const key = e.key;
    if (key.length === 1) {
      if (key === expected.textContent) {
        expected.className = "text-white";
        correctChars++;
      } else {
        expected.className = "text-red-500";
      }
  
      currentCharIndex++;
      totalTyped++;
      updateStats();
  
      if (currentCharIndex >= charSpans.length) {
        endGame();
      }
    }
  });
  
  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", startGame);