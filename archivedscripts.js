function generateContentNavigation() { //supports 2 -level of hierarchy
    const headers = document.querySelectorAll('#markdown-content h2, #markdown-content h3');
    let navHtml = "<ul>";
    let openH3List = false;

    headers.forEach(header => {
        const id = header.innerText.toLowerCase().replace(/\s+/g,'-');
        header.id = id;

        if(header.tagName.toLowerCase() == 'h2'){
            if(openH3List){ //check if h2 list is open
                navHtml += "</ul></li>";
                openH3List = false;
            }
            navHtml += `<li class="h2"><a href="#${id}">${header.innerText}</a>`;

        }else if (header.tagName.toLowerCase() === 'h3'){
            if (!openH3List) { // open h3 if it isnt already
                navHtml += "<ul>";
                openH3List = true;
            }
            navHtml += `<li class="h3"><a href="#${id}">${header.innerText}</a></li>`;
        }
    });

    if (openH3List) { // close the prev h3 list if it was open
        navHtml += "</ul></li>";
    }
    navHtml += "</ul>"; // close main list
    document.querySelector('.content-navigation').innerHTML = navHtml;
}