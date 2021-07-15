$(document).ready(function () {
	heroSec();
	navSlide();
	progressBar();
	waypoints();
	smoothSlide();
});

const smoothSlide = () => {
	/* Nav scroll */

	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								return false;
							} else {
								$target.attr('tabindex', '-1');
								$target.focus();
							}
						}
					);
				}
			}
		});
};

const heroSec = () => {
	setTimeout(() => {
		$('#hero-text').addClass('animate__fadeInLeft');
	}, 100);

	setTimeout(() => {
		$('#hero-buttons').addClass('animate__fadeInLeft');
	}, 750);
};

const waypoints = () => {
	const offerings = $('#offerings');
	const faq = $('#faq');
	const customers = $('#customers');
	const contact = $('#contact');

	const offeringsWP = new Waypoint({
		element: offerings,
		handler: (direction) => {
			var offeringBoxes = document.querySelectorAll('.offering-box');
			offeringBoxes.forEach((box, index) => {
				setTimeout(() => {
					box.classList.toggle('animate__fadeInDown');
				}, index * 200);
			});
		},
		offset: 700,
	});

	const faqWP = new Waypoint({
		element: faq,
		handler: () => {
			var questions = document.querySelectorAll('.question');
			questions.forEach((q, index) => {
				setTimeout(() => {
					q.classList.toggle('animate__fadeIn');
				}, index * 250);
			});
		},
		offset: 700,
	});

	const customersWP = new Waypoint({
		element: customers,
		handler: () => {
			var cs = document.querySelectorAll('.customer');
			cs.forEach((c, index) => {
				setTimeout(() => {
					c.classList.toggle('animate__fadeIn');
				}, index * 200);
			});
		},
		offset: 700,
	});

	const contactWP = new Waypoint({
		element: contact,
		handler: () => {
			var cs = document.querySelectorAll('.contact');
			cs.forEach((c, index) => {
				setTimeout(() => {
					c.classList.toggle('animate__fadeInDown');
				}, index * 200);
			});
		},
		offset: 700,
	});
};

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 350ms ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});

		burger.classList.toggle('burgerToggle');
	});
};

const progressBar = () => {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop(),
			dh = $(document).height(),
			wh = $(window).height();
		scrollPercent = (scroll / (dh - wh)) * 100;
		$('#progressbar').css('width', scrollPercent + '%');
	});
};
