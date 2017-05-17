/**
 * Created by joseph on 12/04/17.
 */
(() => {

		//Mapa no-scroll
	const mapContainers = Array.prototype.slice.apply(document.querySelectorAll('.contact-local .local.map'));		;
	const maps = Array.prototype.slice.apply(document.querySelectorAll('.contact-local .local.map iframe'));
	console.log(mapContainers);
	mapContainers[0].addEventListener('click', () => {
		maps[0].style.pointerEvents = 'auto';
	});
	mapContainers[0].addEventListener('mouseleave', () => {
		maps[0].style.pointerEvents = 'none';
	});

	mapContainers[1].addEventListener('click', () => {
		maps[1].style.pointerEvents = 'auto';
	});
	mapContainers[1].addEventListener('mouseleave', () => {
		maps[1].style.pointerEvents = 'none';
	});


/*	next.addEventListener('click', ()=>{
		testimonyRigth();
	});

	prev.addEventListener('click', ()=>{
		testimonyLeft();
	});*/

	    //--MOBILE MENU-->
	const menu = document.querySelector(".menu-items"),
	 	  burgerButton = document.querySelector("#icon-bar"),
		  listItem = document.getElementsByClassName("list-item");
	let flag = true;
	burgerButton.addEventListener('click', () => {
		if (flag) {
			menu.style.maxHeight = "1000px";
			// menuHeight(menu, 350, 500);
			flag = false;
		} else {
			menu.style.maxHeight = 0;
			// menuHeight(menu, 0, 500);
			flag = true;
			subMenuCursos.removeAttribute("style");
			subMenuCategorias.removeAttribute("style");
			linkCursos.removeAttribute("style");
			linkCategorias.removeAttribute("style");
			menuItems.removeAttribute("style");
		}
	});


	//--- SUB-MENU ----

	const linkCursos = document.querySelector(".cursos"),
			linkCategorias = document.querySelector(".categorias");
	
	let subMenuChild = element => {
		for (let i = 0; i < element.childNodes.length; i++) {
			if (element.childNodes[i].className == "sub-menu") {
				return element.childNodes[i];
			}
		}
	};
	
	let subMenu1 = subMenuChild(linkCursos);
	let subMenu2 = subMenuChild(linkCategorias);

	const menuItems = document.getElementById("menu-items"),
		subMenuCursos = document.getElementById("sub-menuCursos"),
		subMenuCategorias = document.getElementById("sub-menuCategorias");

	let mq = window.matchMedia( "(min-width: 1000px)" );
	if(!mq.matches) {
		// menu.style.maxHeight = "0px";
		subMenuCursos.removeAttribute("style");
		subMenuCategorias.removeAttribute("style");
		menuItems.removeAttribute("style");

		let flagSubMenu = true;
		linkCursos.addEventListener('click', () => {
		// console.log("prueba");
			// menuItems.removeAttribute("style");
			
			if (flagSubMenu) {
				subMenu1.style.left = 0;
				linkCursos.style.backgroundColor = "#8e1a15";
				flagSubMenu = false;
			} else {
				linkCursos.style.backgroundColor = "rgb(166, 38, 32)";
				subMenu1.style.left = '-100%';
				flagSubMenu = true;
			}
			// menuItems.removeAttribute("style");
		});

		let flagSubMenu2 = true;
		linkCategorias.addEventListener('click', () => {
			
			if (flagSubMenu2) {
				linkCategorias.style.backgroundColor = "#8e1a15";
				subMenu2.style.left = 0;
				flagSubMenu2 = false;
			} else {
				linkCategorias.style.backgroundColor = "rgb(166, 38, 32)";
				subMenu2.style.left = '-100%';
				flagSubMenu2 = true;
			}
			// menuItems.removeAttribute("style");
		});

	} else {
		console.log(mq.matches);
		
		subMenu1.style.left = "0";
		subMenu2.style.left = "0";
		menu.style.maxHeight = "1000px";
		subMenuCursos.removeAttribute("style");
		subMenuCategorias.removeAttribute("style");
		menuItems.removeAttribute("style");
	}


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
