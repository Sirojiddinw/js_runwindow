const run = document.querySelector(".header__content")

run.addEventListener('mouseover' , () =>{
    run.style.marginTop  =`${random(0, window.innerHeight - run.clientHeight)}px`;
    run.style.marginLeft =`${random(0, window.innerWidth - run.clientWidth)}px`;
    console.log(run);
});

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
} 