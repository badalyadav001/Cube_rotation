// JavaScript to handle mouse drag and keyboard arrow key rotations

let isDragging = false;
let previousX = 0;
let previousY = 0;
let rotationX = 30;
let rotationY = 30;
const cube = document.querySelector('.cube');

const handleMouseMove = (e) => {
    if (!isDragging) return;
    let deltaX = e.clientX - previousX;
    let deltaY = e.clientY - previousY;

    rotationY += deltaX * 0.3; // Adjust sensitivity
    rotationX -= deltaY * 0.3; // Adjust sensitivity
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    previousX = e.clientX;
    previousY = e.clientY;
};

const handleMouseDown = (e) => {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
};

const handleMouseUp = () => {
    isDragging = false;
};

// Keyboard Controls for Rotation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        rotationY -= 10;
    } else if (e.key === 'ArrowRight') {
        rotationY += 10;
    } else if (e.key === 'ArrowUp') {
        rotationX -= 10;
    } else if (e.key === 'ArrowDown') {
        rotationX += 10;
    }

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

// Adding event listeners for mouse drag functionality
cube.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
