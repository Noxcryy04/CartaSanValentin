document.querySelector('.card').addEventListener('click', () => {
    document.querySelector('.card').classList.toggle('flipped');
});

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 20 + 10}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.querySelector('.particle-background').appendChild(particle);
}

for (let i = 0; i < 50; i++) {
    createParticle();
}
