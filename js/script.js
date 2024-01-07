$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 700)

})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        1024: {
            slidesPerView: 3
        }
    }, 

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let sw = document.getElementById("sw");

for (let i = 1; i < 9; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "swiper-slide");
    let img = document.createElement("img");
    img.setAttribute("src", `image/price/${i}.jpg`);
    img.setAttribute("class", "slideContent");
    img.style.display = "block";
    img.style.margin = "0 auto";
    img.style.height = "95%";
    div.appendChild(img);
    sw.appendChild(div);

    img.onclick = function () {
        showModal(i);
    }
}


function showModal() {
    let modal = document.getElementById("modal");
    modal.style.transform = "scale(1)";
}


