document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.style.opacity = 1;
        }, index * 500);
    });
});
