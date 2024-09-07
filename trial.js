//JS for the marquees
const marquee = document.getElementById('marquee');
const marqueeItems = document.querySelectorAll('.marquee-item');

let isPaused = false;

marquee.addEventListener('mouseover', () => {
    isPaused = true;
    marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseout', () => {
    if (isPaused) {
    marquee.style.animationPlayState = 'running';
    isPaused = false;
    }
});

marqueeItems.forEach(item => {
    item.addEventListener('click', () => {
    const isActive = item.classList.contains('show');
    marqueeItems.forEach(i => i.classList.remove('show'));

    if (!isActive) {
        item.classList.add('show');
        marquee.style.animationPlayState = 'paused';
    } else {
        marquee.style.animationPlayState = 'running';
    }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
    marqueeItems.forEach(item => item.classList.remove('show'));
    marquee.style.animationPlayState = 'running';
    }
});


// JS for the phone side bar
function openMenu() {
    document.getElementById("header3").style.width = "50vh";
    document.getElementById("header3").style.backgroundColor = "hsl(36, 100%, 99%)";
    document.getElementById("overlay").style.display = "block"; // Show overlay
}
function closeMenu() {
    document.getElementById("header3").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Show overlay
}

// Function for changing theme

const body = document.getElementById("body");
const service = document.getElementById("service");
const services = document.getElementById("services");
const about = document.getElementById("about");
const testi = document.getElementById("testi");
const footer = document.getElementById("footer");
const homeBar = document.getElementById("homebar");
const boxes = document.querySelectorAll(".box");


function themeOne(){
    body.classList.toggle('change');
    service.classList.toggle('change');
    services.classList.toggle('change');
    about.classList.toggle('change');
    testi.classList.toggle('change');
    footer.classList.toggle('change');
    homeBar.classList.toggle('change');

    marqueeItems.forEach(item => {
        item.classList.toggle('change');
    })
    boxes.forEach(box => {
        box.classList.toggle('change');
    })
}


const mainButton = document.getElementById('main-button');
        const iconMenu = document.getElementById('icon-menu');
        //Owm declaration
        const floatingButtonContainer = document.getElementById('floating-button-container');

mainButton.addEventListener('click', () => {
    iconMenu.classList.toggle('open');

    // Optionally, you can rotate the main button for a fancy effect
    mainButton.classList.toggle('rotated');
    floatingButtonContainer.classList.toggle('open');
});


// JS for the cards
const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('change');
            })
        })

boxes.forEach(box => {
        box.addEventListener("click", () => {
                box.classList.toggle("active");
        })
})