//adding styles to the navbar elements when i click on one
let navElements = document.querySelectorAll('.nav-wrapper');
    navElements.forEach((nav) => {
        nav.addEventListener('click', () => {
            // Remove 'active-nav' from all nav elements
            navElements.forEach((element) => element.classList.remove('active-nav'));
            // Add 'active-nav' to the clicked element
            nav.classList.add('active-nav');
    })
})

//toggling dark mode
const toggleBtn = document.querySelector('.dark-icon');
const themeWrapper = document.getElementById("theme-wrapper");
const containerElement = document.querySelector('.container');

themeWrapper.addEventListener('click', () => {
    containerElement.classList.toggle('light-mode');

    //switching icons
    if(containerElement.classList.contains('light-mode')){
        themeWrapper.innerHTML = `<i class="fa-regular fa-sun light-icon"></i>`
    } else {
        themeWrapper.innerHTML = `<i class="fa-regular fa-moon dark-icon"></i>`
    }
})