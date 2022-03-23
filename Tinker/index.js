const sliderContainer = document.querySelector('.container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const upBtn = document.querySelector('.action-buttons>button:last-child');
const downBtn = document.querySelector('.action-buttons>button:first-child');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIdx = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
	const sliderHeight = document.documentElement.clientHeight;
	if (direction === 'up') activeSlideIdx = ++activeSlideIdx % slidesLength;
	else if (direction === 'down') activeSlideIdx = (--activeSlideIdx + slidesLength) % slidesLength;

	slideRight.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`;
};
