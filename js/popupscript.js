// Return first element mathcing query for popup and close
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

//After 1s show the popup
window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block";
    }, 1000)
}

//when the user clicks close, then hide the popup
close.addEventListener('click', () => {
    popup.style.display = "none";
})