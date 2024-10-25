let highestZ = 1;

class Paper {
  holdingPaper = false;
  touchStartX = 0;
  touchStartY = 0;
  prevTouchX = 0;
  prevTouchY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    // Handle touch events for mobile
    paper.addEventListener('touchstart', (e) => {
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZ;
      highestZ += 1;

      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.prevTouchX = this.touchStartX;
      this.prevTouchY = this.touchStartY;
    });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault(); // Prevent scrolling when dragging
      if (!this.holdingPaper) return;

      this.velX = e.touches[0].clientX - this.prevTouchX;
      this.velY = e.touches[0].clientY - this.prevTouchY;

      this.currentPaperX += this.velX;
      this.currentPaperY += this.velY;

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;

      this.prevTouchX = e.touches[0].clientX;
      this.prevTouchY = e.touches[0].clientY;
    });

    paper.addEventListener('touchend', () => {
      this.holdingPaper = false;
    });

    // Handle mouse events for desktop
    paper.addEventListener('mousedown', (e) => {
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZ;
      highestZ += 1;

      this.touchStartX = e.clientX;
      this.touchStartY = e.clientY;
      this.prevTouchX = this.touchStartX;
      this.prevTouchY = this.touchStartY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.holdingPaper) return;

      this.velX = e.clientX - this.prevTouchX;
      this.velY = e.clientY - this.prevTouchY;

      this.currentPaperX += this.velX;
      this.currentPaperY += this.velY;

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;

      this.prevTouchX = e.clientX;
      this.prevTouchY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
