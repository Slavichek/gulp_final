$(document).ready(function () {
	// $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll <= 10) {
    //         $(".header").removeClass("header--scroll");
    //     } else {
    //         $(".header").addClass("header--scroll");
    //     }
    // });
    const menuBtn = document.querySelector(".menu-btn");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    });
	const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  });
	const swiper2 = new Swiper('.section-slider .swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '<mark>' + 'Step'+ ' ' + (index + 1) + '</mark>' + '</span>';
		  },
		},
		// effect: 'flip',
		// flipEffect: {
		// 	slideShadows: true,
		// 	limitRotation: true
		// },
		navigation: {
		  nextEl: '.swiper__next',
		  prevEl: '.swiper__prev',
		},
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
		
	  });
});
