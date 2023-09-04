document.addEventListener('scroll', function () {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrolled = window.scrollY;
    const speed = 0.5;

    parallaxBg.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
});
