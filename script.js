const title =document.querySelector(".header__content h1")
const text = title.innerHTML
title.innerHTML = ''
function rec(i = 0) {
    title.innerHTML += text[i]
    i++
    if (text.length > i) {
        setTimeout(() => {
            rec(i)
        }, 500);
    }
}
rec()






