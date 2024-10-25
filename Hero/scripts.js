let isDragging = false;
let startX, startY, initialX, initialY;

const papers = document.querySelectorAll('.paper');

papers.forEach(paper => {
    // Function to start dragging
    const startDrag = (e) => {
        isDragging = true;
        startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
        initialX = paper.offsetLeft;
        initialY = paper.offsetTop;

        paper.style.transition = 'none'; // Disable transition while dragging
    };

    // Function to stop dragging
    const stopDrag = () => {
        isDragging = false;
        paper.style.transition = ''; // Re-enable transition after dragging
    };

    // Function to handle dragging
    const drag = (e) => {
        if (!isDragging) return;

        e.preventDefault(); // Prevent default behavior

        const x = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const y = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

        const dx = x - startX;
        const dy = y - startY;

        // Limit the dragging area
        const newLeft = Math.max(0, Math.min(initialX + dx, window.innerWidth - paper.offsetWidth));
        const newTop = Math.max(0, Math.min(initialY + dy, window.innerHeight - paper.offsetHeight));

        paper.style.left = `${newLeft}px`;
        paper.style.top = `${newTop}px`;
    };

    // Event listeners for mouse and touch
    paper.addEventListener('mousedown', startDrag);
    paper.addEventListener('mouseup', stopDrag);
    paper.addEventListener('mousemove', drag);
    
    paper.addEventListener('touchstart', startDrag);
    paper.addEventListener('touchend', stopDrag);
    paper.addEventListener('touchmove', drag);
});
