/**
 * Created by joseph on 12/04/17.
 */
(() => {

	/*---------Slider Testimonio------*/
	const slider = document.querySelector('#slider'),
		next = document.querySelector('#btn-next'),
		prev = document.querySelector('#btn-prev');
	console.log("hola");

	slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
	slider.style.marginLeft="-33.3%";
	let i=2;
	console.log(slider.children[3]);
	slider.children[i].classList.add("focus");

	function testimonyRigth(){
		let pos=33.3;
		let anim = setInterval(animDerecha, 1);
		slider.children[i].classList.remove("focus");
		function animDerecha(){
			if(pos >= 66.6){
				slider.insertBefore(slider.firstElementChild,slider.lastElementChild.nextSibling);
				slider.style.marginLeft = `-33.3%`;
				slider.children[i].classList.add("focus");
				clearInterval(anim)
			}else{
				pos= pos + 0.2;
				slider.style.marginLeft = `-${pos}%`;
			}
        }
    }

	function testimonyLeft(){
		let pos=33.3;
		let anim = setInterval(animDerecha, 1);

		function animDerecha(){
			if(pos <= 0){
				slider.children[i].classList.remove("focus");
				slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
				slider.style.marginLeft = `-33.3%`;
				slider.children[i].classList.add("focus");
				clearInterval(anim)
			}else{
				pos = pos - 0.2;
				slider.style.marginLeft = `-${pos}%`;
			}
		}
	}

	function testimonyAutoplay(){
		setInterval(testimonyRigth, 3000)
	}

	testimonyAutoplay();

/*	next.addEventListener('click', ()=>{
		testimonyRigth();
	});

	prev.addEventListener('click', ()=>{
		testimonyLeft();
	});*/
    
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
	});

})()


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
