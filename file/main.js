function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDifference = newYear - now;

    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
    const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.moving-image');
    let positions = [-100, -150, -200]; 
  
    function moveImages() {
      images.forEach((img, index) => {
        if (positions[index] >= 100) {
          positions[index] = -100;
        }
        positions[index] += 1;
        img.style.right = `${positions[index]}%`;
      });
      requestAnimationFrame(moveImages);
    }
  
    moveImages();
  });
  
