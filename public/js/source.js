/**
 * Created by joseph on 12/04/17.
 */
(() => {
	//--MOBILE MENU-->
	const menu = document.querySelector('header nav'),
		burgerButton = document.querySelector(".mobile-bar a");
	let flag = true;
	burgerButton.addEventListener('click', () => {
		if (flag) {
			menu.style.left = '0%';
			flag = false;
		} else {
			menu.style.left = '-100%'
			flag = true;
		}

	})
})();