let downBtn = document.querySelector('#down-btn');

let html = document.querySelector('html');

downBtn.addEventListener("click", downButton);

function downButton(){

    html.style.overflow = 'visible';

    //SLIDE DOWN
    
    // downBtn.classList.replace('down-btn', 'down-btn-anim');

    // setTimeout(hideButton, 2000)
}

// function hideButton(){
//     downBtn.style.visibility = 'hidden';
// }
