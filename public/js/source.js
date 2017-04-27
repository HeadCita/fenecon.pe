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
			menuHeight(menu, 300, 500);
			flag = false;
		} else {
			menuHeight(menu, 0, 500);
			flag = true;
		}

	})
})();

function menuHeight(element, hasta, duracion) {

	let inicio = element.offsetHeight,
            recorrido = hasta - inicio,
            velocidad = 0,
            incremento = 20;

        let animacion = () => {
            velocidad += incremento;
            let val = Math.easeInOutQuad(velocidad, inicio, recorrido, duracion);
            element.style.height = `${val}px`;

            if (velocidad < duracion) {
                setTimeout(animacion, incremento);
            }
        };
        animacion();

}

Math.easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;

        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
}