const header = document.querySelector('header');

document.addEventListener('scroll', () => {

	var scroll_position = window.scrollY;

	if (scroll_position > 800)
	 {
		
		header.style.backgroundColor = '#7bbb71';

	} else 

	{
		header.style.backgroundColor = '#D9DF67';
	}
}

);