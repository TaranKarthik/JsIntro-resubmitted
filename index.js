function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var windowPosition = window.innerHeight / 1.3;

    if (introPosition < windowPosition){
        introText.classList.add('intro-appear');
    }
}


window.addEventListener('scroll',scrollAppear);