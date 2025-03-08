//adding styles to the navbar elements when i click on one
let navElements = document.querySelectorAll('.nav-wrapper');
    navElements.forEach((nav) => {
        nav.addEventListener('click', () => {
            // Remove 'active-nav' from all nav elements
            navElements.forEach((element) => element.classList.remove('active-nav'));
            // Add 'active-nav' to the clicked element
            nav.classList.add('active-nav');
    })
});


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

//toggligling the styles for the star ratings
const starRatings = document.querySelectorAll('.fa-star');
starRatings.forEach((star,index) => {
    star.addEventListener('click', () => {
       starRatings.forEach((s, i) => {
        if(i <= index){
            s.classList.remove('fa-regular');
            s.classList.add('fa-solid');
        }  else {
            s.classList.remove('fa-solid');
            s.classList.add('fa-regular')
        }
       })
    })
})

//toggling closing and opening the modal
const modalWindow = document.getElementById('modal-window');
const modalOverlay = document.querySelector('.overlay');
const closeModal = document.querySelectorAll('.close-modal');
const bookElement = document.querySelectorAll('.book');

//event listeners
closeModal.forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeWindow)
});

bookElement.forEach((book) => {
    book.addEventListener('click', openWindow)
})

//opening the modal with the bookelement
function openWindow(){
    modalWindow.classList.remove('hide-modal');
    modalOverlay.classList.remove('hide-modal');
}

function closeWindow () {
    modalWindow.classList.add('hide-modal');
    modalOverlay.classList.add('hide-modal')
}
