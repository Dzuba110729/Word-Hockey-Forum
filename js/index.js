$(document).ready(function () {
	$('.news__slider, .media__slider').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		centerMode: false,
		variableWidth: true,
		rasponsive: [
			{
				breakpoint: 960,
				setting: {
					slidesToShow: 2
				},
				breakpoint: 420,
				setting: {
					slidesToShow: 1
				}
			}
		]
	});
	//бургер меню
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header__btn-mob, .header__menu-mob').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


// запуск видео
function openFullscreen() {
	var overlay = document.querySelector(".video-overlay");
	overlay.style.display = "none";

	var video = document.getElementById("videoPlayer");
	if (video.requestFullscreen) {
		 video.requestFullscreen();
	} else if (video.mozRequestFullScreen) { /* Firefox */
		 video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		 video.webkitRequestFullscreen();
	} else if (video.msRequestFullscreen) { /* IE/Edge */
		 video.msRequestFullscreen();
	}
}


// открытие галлереи
Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options
});


// запуск видео
function hideVideo(event) {
	var overlay = event.currentTarget;
	overlay.classList.add('active');
}


// отправка на почту
function submitEmail() {
	var email = document.getElementById('email').value;
	// Добавьте здесь логику для обработки адреса электронной почты, например, отправку запроса на сервер.
	// В данном примере просто выводится адрес электронной почты в консоль.
	console.log("Адрес электронной почты: ", email);
	alert("Спасибо! Мы отправим вам уведомление о начале WHF.");
}


// таймер
document.addEventListener('DOMContentLoaded', function () {
	// конечная дата
	const deadline = new Date(2023, 11, 14);
	// id таймера
	let timerId = null;
	// склонение числительных
	function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		$days.textContent = days < 10 ? '0' + days : days;
		$hours.textContent = hours < 10 ? '0' + hours : hours;
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
		$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
		$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
		$minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
	}
	// получаем элементы, содержащие компоненты даты
	const $days = document.querySelector('.timer__days');
	const $hours = document.querySelector('.timer__hours');
	const $minutes = document.querySelector('.timer__minutes');
	// вызываем функцию countdownTimer
	countdownTimer();
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
});


// куки
const cookieContainer = document.querySelector(".cookie-bar");
const cookieButton = document.querySelector(".cookie-btn");
const hideCookieBar = () => {
	cookieContainer.style.display = "none";
	localStorage.setItem("cookieBannerDisplayed", "true");
};
cookieButton.addEventListener("click", hideCookieBar);
setTimeout(() => {
	if (!localStorage.getItem("cookieBannerDisplayed")) {
		cookieContainer.classList.add("active");
	}
}, 2000);


// попап
function togglePopup() {
	var popup = document.getElementById("popup");
	popup.classList.toggle("show");
}
var isPasswordVisible = false;
function togglePassword() {
	var passwordInput = document.getElementById("passwordInput");
	var toggleIcon = document.getElementById('toggleIcon');
	if (isPasswordVisible) {
		passwordInput.setAttribute('type', 'password'); // Если пароль видим, скрываем его
		toggleIcon.style.backgroundImage = 'url("../images/parol.svg")'; // Изменяем иконку на изображение закрытого замка
		isPasswordVisible = false;
	} else {
		passwordInput.setAttribute('type', 'text'); // Если пароль скрыт, делаем его видимым
		toggleIcon.style.backgroundImage = 'url("../images/parol-h.svg")'; // Изменяем иконку на изображение открытого замка
		isPasswordVisible = true;
	}
}
function changeImage() {
	var checkbox = document.getElementById('rememberPas');
	var customCheckbox = document.querySelector('.custom-checkbox');

	if (checkbox.checked) {
		customCheckbox.style.backgroundImage = 'url("../images/checkbox\ \(1\).svg")'; // Изменить на ваш путь к изображению при отмеченном чекбоксе
	} else {
		customCheckbox.style.backgroundImage = 'url("../images/checkbox.svg")'; // Изменить на ваш путь к изображению при неотмеченном чекбоксе
	}
}
function login() {
	var username = document.getElementById('email').value;
	var password = document.getElementById('passwordInput').value;
	var errorMessage = document.getElementById('error-message');

	// Здесь вы можете добавить логику проверки аутентификации.
	// Например, сравнение введенных данных с данными из базы данных или другого источника.

	// Пример простой проверки:
	if (username === 'ваш_email@example.com' && password === 'ваш_пароль') {
		// В случае успешной аутентификации, перенаправьте пользователя на свой профиль.
		window.location.href = '/ваш_профиль'; // Замените '/ваш_профиль' на URL вашего профиля.
	} else {
		// Если данные неверны, выполните соответствующие действия, например, показ сообщения об ошибке.
		alert('Неверные учетные данные. Попробуйте снова.');
	}
}
function openPopup() {
	var loginPopup = document.getElementById('popup');
	var popup = document.getElementById('popup-end');
	loginPopup.style.display = 'none'; // Закрываем попап входа перед открытием попапа восстановления
	popup.style.display = 'block';// Открываем попап восстановления пароля
}
function closePopup() {
	var loginPopup = document.getElementById('popup');
	var popup = document.getElementById('popup-end');
	popup.style.display = 'none'; // Закрываем попап восстановления пароля
	loginPopup.style.display = 'block'; // Открываем попап входа при закрытии попапа восстановления пароля
}
function openSignupPage() {
	window.location.href = "/reg.html";
}

// программа
function showProgram(program) {
	if (program === 'first') {
		document.getElementById('program1').style.display = 'block';
		document.getElementById('program2').style.display = 'none';
	} else if (program === 'second') {
		document.getElementById('program1').style.display = 'none';
		document.getElementById('program2').style.display = 'block';
	}
}


// partner
$('.tooltip').tooltipster({
	contentCloning: true,
	maxWidth: 408,
	arrow: false,
	distance: -30,
	interactive: true,
	selfDestruction: true,
	theme: ['tooltipster-noir', 'tooltipster-noir-customized']
});