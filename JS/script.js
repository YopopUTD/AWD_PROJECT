let isAnimationRunning = false;

  function toggleInstruction() {
    const instruction = document.getElementById('instruction');
    instruction.style.display = (instruction.style.display === 'none' || instruction.style.display === '') ? 'block' : 'none';
  }

  const shutter = document.getElementById('shutter');
  const photo = document.querySelector('.photo');

  shutter.addEventListener('animationstart', () => {
    isAnimationRunning = true;
    toggleInstruction();
  });

  shutter.addEventListener('animationend', () => {
    isAnimationRunning = false;
    toggleInstruction();
  });

  photo.addEventListener('animationend', () => {
    if (!isAnimationRunning) {
      toggleInstruction();
    }
  });