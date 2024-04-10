document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    // window.onscroll = function() {
    //     if (window.pageYOffset > 100) {
    //         header.classList.add("small-header");
    //     } else {
    //         header.classList.remove("small-header");
    //     }
    // };
    window.onscroll = function() {scrollFunction()};

    header.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
});



function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName("header").style.fontSize = "30px";

    } else {
      document.getElementsByClassName("header").style.fontSize = "90px";
    }
}