(() => {
  const leftArrow = document.querySelector("#grid0");
  leftArrow.classList.add("isDisabled");
  const rightArrow = document.querySelector("#grid5");

  let idx = 1;
  let pointerToPrevious = idx;

  rightArrow.addEventListener("click", (e) => {
    if (idx === 4) return;

    pointerToPrevious = idx;
    idx++;

    const active = document.querySelector(`#grid${idx}`);
    const notActive = document.querySelector(`#grid${pointerToPrevious}`);

    active.classList.remove("fitImage");
    active.classList.add("expandImage", "expanded");
    notActive.classList.remove("expandImage");
    notActive.classList.add("fitImage");

    if (idx === 4) {
      rightArrow.classList.add("isDisabled");
      return;
    } else {
      if (rightArrow.classList.contains("isDisabled"))
        rightArrow.classList.remove("isDisabled");
      if (leftArrow.classList.contains("isDisabled"))
        leftArrow.classList.remove("isDisabled");
    }
  });

  leftArrow.addEventListener("click", (e) => {
    if (idx === 1) return;
    pointerToPrevious = idx;
    idx--;

    const active = document.querySelector(`#grid${idx}`);
    const notActive = document.querySelector(`#grid${pointerToPrevious}`);

    active.classList.remove("fitImage");
    active.classList.add("expandImage", "expanded");
    notActive.classList.remove("expandImage");
    notActive.classList.add("fitImage");

    if (idx === 1) {
      leftArrow.classList.add("isDisabled");
      return;
    } else {
      if (leftArrow.classList.contains("isDisabled"))
        leftArrow.classList.remove("isDisabled");
      if (rightArrow.classList.contains("isDisabled"))
        rightArrow.classList.remove("isDisabled");
    }
  });
})();
