(() => {
  const breathText = document.querySelector(".text");
  const btn = document.querySelector(".btn");

  const texts = ["Inhale..", "Hold..", "Exhale.."];
  let index = 0;

  function updateText() {
    breathText.textContent = texts[index];
    index = (index + 1) % texts.length;
  }

  updateText();

  const intervals = [3000, 2000, 3000];
  let intervalIndex = 0;

  function updateTextWithInterval() {
    updateText();
    intervalIndex = (intervalIndex + 1) % intervals.length;
    setTimeout(updateTextWithInterval, intervals[intervalIndex]);
  }

  setTimeout(updateTextWithInterval, intervals[intervalIndex]);
})();
