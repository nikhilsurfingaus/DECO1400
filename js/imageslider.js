//Current image in automatic slideshow
var counter = 1;
setInterval(function(){
    //Move along each ID radio button for each image
    document.getElementById('radio' + counter).checked = true;
    counter++;
    //If we cycle through all images start the slideshow reset to the start
    if(counter > 9){
        counter = 1;
    }
}, 3500)