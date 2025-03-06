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