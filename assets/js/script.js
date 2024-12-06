//хедер
$(document).ready(function () {
	let isOpen = false;
	function checkIsOpen(newIsOpen) {
		if (newIsOpen) {
			$('.header__burger,.header__menu').addClass('active');
			$('body').addClass('lock');
		} else {
			$('.header__burger,.header__menu').removeClass('active');
			$('body').removeClass('lock');
		}
	}

	$('.header__link').click(function (event) {
		event.preventDefault();
		const targetPage = event.target.href.split('/').at(-1).split('#')[0];
		const currentPage = window.location.pathname
			.split('/')
			.at(-1)
			.split('#')[0];
		if (targetPage === currentPage) {
			isOpen = false;
			checkIsOpen(isOpen);
		}
		window.location.replace(event.target.href);
	});
	$('.header__burger').click(function (event) {
		isOpen = !isOpen;
		checkIsOpen(isOpen);
	});
});

//карусель
$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 3,
		},
		600: {
			items: 4,
		},
		1000: {
			items: 8,
		},
	},
});
