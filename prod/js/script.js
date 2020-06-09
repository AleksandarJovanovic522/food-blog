//----------------------------
//HEADER FUNCTIONS START
//----------------------------


//VARIABLES
const menu = document.querySelector('#menu'),
  search = document.querySelector('.search'),
  searchBar = document.querySelector('.search-bar'),
  searchIcon = document.querySelector('.search-icon'),
  label = document.querySelector('.floating-label');



//ADDING CLASS 'search-clicked' WHEN CLICKED ON 'search-icon' 
//REMOVING CLASS 'hover' PREVENT HOVER WHILE SEARCH BAR IS EXTENDED
//FOCUSING ON SEARCHBAR
const showSearchBar = () => {
  menu.classList.add('search-clicked');
  searchIcon.classList.remove('hover');
  searchBar.focus();


}
//ADDING CLASS TO LABEL WHEN SEARCHBAR IS NOT EMPTY
const liftLabel = () => {
  if (searchBar.value != ' ') {
    label.classList.add('floating-label-lift');
  }
}
//WHEN YOU CLICK OUTSIDE THE ELEMENT WITH CLASS 'SEARCH' 
//REMOVING CLASS 'search-clicked'
//ADDING CLASS 'hover' BACK 
// CLEARING THE VALUE OF SEARCHBAR
const removeClass = (event) => {
  const isClickInside = search.contains(event.target);
  if (!isClickInside) {
    menu.classList.remove('search-clicked');
    searchIcon.classList.add('hover');
    searchBar.value = '';
    label.classList.remove('floating-label-lift');
  }
};
//ADDING EVENT LISTENERS 
document.addEventListener('keypress', liftLabel);
document.addEventListener('click', removeClass);
searchIcon.addEventListener('click', showSearchBar);

//DROPDOWN MENU

//VARIABLES
const dropdown = document.querySelector("#dropdown"),
  hamburger = document.querySelector('.hamburger'),
  closeBtn = document.querySelector('.close-btn');

//SLIDE DOWN 
const openNav = () => {
  dropdown.style.height = "100vh";
  console.log('click');
}

//SLIDE UP
const closeNav = () => {
  dropdown.style.height = "0vh";
}

//ADDING EVENT LISTENERS
hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

//----------------------------
//HEADER FUNCTIONS END
//----------------------------


//----------------------
//OFFERS TABS START
//----------------------

//VARIABLES
const tabContent = document.getElementsByClassName("tab-content"),
  buttonTab = document.getElementsByClassName("buttonTab"),
  buttonBreakfast = document.getElementById("buttonBreakfast"),
  buttonLunch = document.getElementById("buttonLunch"),
  buttonDinner = document.getElementById("buttonDinner");
//SWITCHING TABS

const openTab = (evt, cityName) => {
  let i;
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < buttonTab.length; i++) {
    buttonTab[i].className = buttonTab[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}


//ADDING EVENT LISTENERS
buttonBreakfast.addEventListener('click', function (e) {
  openTab(e, 'breakfast')
});

buttonLunch.addEventListener('click', function (e) {
  openTab(e, 'lunch')
});

buttonDinner.addEventListener('click', function (e) {
  openTab(e, 'dinner')
});

//SETTING DEFAULT TAB
buttonBreakfast.click();

//----------------------
//Tabs end
//----------------------


//----------------------
//USER STATEMENTS START
//----------------------



//CAROUSELL
//DEFINING VARIABLE AS JSON
const usersObj = {
  "users": [{
      "firstName": "carrie",
      "lastName": "gordon",
      "country": "serbia",
      "city": "novi sad",
      "statement": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
      "imageUrl": "dist/images/picture-user1.png"
    },

    {
      "firstName": "harold",
      "lastName": "redmond",
      "country": "england",
      "city": "munchester",
      "statement": "Sint ut ullamco pariatur eu duis magna eiusmod veniam eiusmod irure occaecat dolor. Velit est proident ullamco quis. Amet incididunt veniam enim aute fugiat voluptate voluptate pariatur aliqua culpa.",
      "imageUrl": "dist/images/picture-user2.png"
    },
    {
      "firstName": "Courtnie",
      "lastName": "Derrick",
      "country": "usa",
      "city": "san francisco",
      "statement": "Non culpa consectetur dolor adipisicing nulla magna sunt labore aliqua laboris anim et deserunt. Deserunt do et ea magna aliquip id ullamco sint ex non minim. Pariatur adipisicing aliqua dolore culpa ex est amet.",
      "imageUrl": "dist/images/picture-user3.png"
    }
  ]
}
//DYNAMICALLY ADDING ELEMENTS
const slider = document.getElementById('users'),
  userList = usersObj.users;
userList.map(function (user) {
  // console.log(korisnik.firstName);
  article = document.createElement('article')
  article.innerHTML =
    `<div class="person">
      <img src='${user.imageUrl}' alt="user">
        <div class="person-info">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.city}, ${user.country}</p>
        </div>
    </div> 
    <p class="statement">“${user.statement}”</p>`;
  article.className = "slide"
  slider.appendChild(article)

})





//SLIDER FUNCTIONS

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i,
    slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}





const prev = document.querySelector('.prev'),
  next = document.querySelector('.next');
//
//ADDING AND REMOVING CLASS OPACITY 


const oppacity = (arrow) => {
  if (arrow === 'prev') {
    prev.classList.add('opacity');
    next.classList.remove('opacity');
  } else if (arrow === 'next') {
    next.classList.add('opacity');
    prev.classList.remove('opacity');
  }
}
//DEFAULT ARROW WITH CLASS OPACITY 
oppacity('next');
//ADDING EVENT LISTENERS ON ARROWS
//PREV
prev.addEventListener('click', function () {
  plusSlides(-1);
  oppacity('prev');
});
//NEXT
next.addEventListener('click', function () {
  plusSlides(1);
  oppacity('next');
});

//----------------------
//USER STATEMENTS END
//----------------------