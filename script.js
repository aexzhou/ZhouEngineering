function adjustName() {
    var name = document.getElementById('name');
    var windowWidth = window.innerWidth;
    const threshold1 = 1400;
    const threshold2 = 1300;

    if(windowWidth <= threshold1 && windowWidth >= threshold2){
        name.style.opacity = (windowWidth - threshold2)/(threshold1-threshold2);
    }else if (windowWidth < threshold2) {

        name.style.opacity = 0;
    }else{ 
        name.style.opacity = 1;
    }
}

function throttle(func, limit) { //improve performance 
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function scrollFunction() {
    var windowWidth = window.innerWidth;
    var navElements = document.getElementsByClassName("navigation");
    const nav = navElements[0]; 
    const responsive = 768;

    if(windowWidth <= responsive){
        nav.style.display = 'none';
    }else{
        if (navElements.length > 0) {  // handle 0 elemnt error
        
            const buttons = nav.getElementsByTagName('a');
    
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                nav.style.padding = "6px 20px";
                nav.style.fontSize = "16px"; 
                nav.style.position = 'fixed'; 
                nav.style.top = '0';
                nav.style.width = '100%'; 
                nav.style.boxSizing = 'border-box';
    
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.letterSpacing = '3px'; 
                }
    
            } else {
                nav.style.padding = "16px 20px"; //reset defaults
                nav.style.fontSize = "16px";  
                nav.style.position = 'relative'; 
                nav.style.display = 'flex';
                nav.style.boxSizing = 'border-box';
    
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.letterSpacing = 'normal';
                }
            }
        }
    } 
}


document.addEventListener('DOMContentLoaded', () => {
    
    scrollFunction();
    adjustName();

    window.addEventListener('resize', adjustName);
    window.addEventListener('resize', scrollFunction);

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        window.addEventListener('scroll', throttle(scrollFunction,100));
    }else{
        window.addEventListener('scroll', scrollFunction);
    }
    
});


function toggleMenu() {
    var menu = document.querySelector('.navigation ul');
    var menuIcon = document.querySelector('.hamburger-menu');
    menu.classList.toggle('show');
    menuIcon.classList.toggle('menu-toggled');
}

// document.querySelectorAll('.directory-tree a').forEach(link => {
//     link.addEventListener('click', function(e) {
//         const nextUl = this.nextElementSibling;
//         if (nextUl && nextUl.tagName === 'UL') {
//             e.preventDefault(); // prevent default anchor behavior
//             nextUl.style.display = nextUl.style.display === 'none' ? 'block' : 'none'; // toggle display
//         }
//     });
// });

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function goToPage(url) {
    window.location.href = url;
}

