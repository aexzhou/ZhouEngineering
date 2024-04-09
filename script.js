document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            header.classList.add("small-header");
        } else {
            header.classList.remove("small-header");
        }
    };

    header.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
});
