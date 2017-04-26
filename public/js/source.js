/**
 * Created by joseph on 12/04/17.
 */
(() => {
	//--MOBILE MENU-->
	const menu = document.querySelector(".menu-items"),
	 	  burgerButton = document.querySelector("#icon-bar");
	let flag = true;
	burgerButton.addEventListener('click', () => {
		if (flag) {
			menu.style.height = '100%';
			flag = false;
		} else {
			menu.style.height = '0';
			flag = true;
		}

	})
})();



Math.easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;

        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
}