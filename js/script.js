// Get slider img | array.form
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number of slides
let slidesCount = sliderImages.length;

// set first slide

let currentSlide = 1;

// Slide Number

let slideNumber = document.getElementById('slide-number');

//pre & next buttons

let nextButton = document.getElementById('next');

let prevButton = document.getElementById('prev');



// Handle click on prev & next buttons

nextButton.onclick = nextSlide ;
prevButton.onclick = prevSlide ;

// Create a ul Element Bolits

let paginationElement = document.createElement('ul');

// Set Id on ul Element Bolits

paginationElement.id = "pagination-ul";

// Creat li
for (i = 1; i<= slidesCount; i++ ){

    // Creat The LI

    let paginationItem = document.createElement('li');

    // Set Id on li Element Bolits

paginationItem.setAttribute('data-index', i);

// Set Item Content
// paginationItem.appendChild(document.createTextNode(i));
// append items to the ul
paginationElement.appendChild(paginationItem);
}
// add the created ul in the page
document.getElementById('indicators').appendChild(paginationElement);


// get creat  a new variable ul

let paginationNewUl = document.getElementById('pagination-ul');

// Get bullets items | array.form
let bulletsItems = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop all bullets 
for (i = 0 ; i < bulletsItems.length; i++){

    bulletsItems[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));

            theChecker();

    }
    
}



// trigger The Checker function

theChecker();


// Start a next Slide function
function nextSlide(){

    if(nextButton.classList.contains('disabled')){
        return false
    } else{
        currentSlide++;
        theChecker();
    }
}


// Start a Prev Slide function
function prevSlide(){
  if(prevButton.classList.contains('disabled')){
        return false
    } else{
        currentSlide--;
        theChecker();
    }
}



// creat the checker function
function theChecker(){
    slideNumber.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);


    //Remove All ACtive classes From img and bullets function
    removeAllActive();


    //Remove All ACtive classes From img and bullets function
    removeAllActive();


    //set a active class on current img
    sliderImages[currentSlide - 1 ].className = 'active';

    //set a active class on uL BULLeTS
    paginationNewUl.children[currentSlide - 1].className = 'active';


    //check if current slide is the first
    if(currentSlide == 1){

        //add Disabeled Class On Prev Button
        prevButton.classList.add('disabled');
    } else{
        //remove Disabeled Class On Prev Button
            prevButton.classList.remove('disabled');

    }


    //check if current slide is the Last
    if(currentSlide == slidesCount){

        //add Disabeled Class On Next Button
        nextButton.classList.add('disabled');
    } else{
        //remove Disabeled Class On Next Button
            nextButton.classList.remove('disabled');

    }

    
}

// Remove All ACtive classes From img and bullets function
function removeAllActive(){
    //loop remove img
    sliderImages.forEach(function(img){
        img.classList.remove('active');

    });

    //loop remove bullets 
    bulletsItems.forEach(function(bullets){
        bullets.classList.remove('active');

    });


    
} 
