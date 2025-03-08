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

//adding an active class to the genre buttons
let genreButtons = document.querySelectorAll('.btn-genre');
genreButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        genreButtons.forEach((element) => element.classList.remove('active-genre'));
        btn.classList.add('active-genre');
        console.log(btn.value)
    })
})

//toggling the genre element
const genreContainer = document.querySelector('.bottom-genre')
const filterGenrebtn = document.querySelector('.filter-btn');
filterGenrebtn.addEventListener('click', () => {
    genreContainer.classList.toggle('hide-genre')
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

//closing the modal when i click on the body
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modalWindow.classList.contains('hide-modal')){
        closeWindow()
    }
})

