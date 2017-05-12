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
		setInterval(testimonyRigth, 7000)
	}

	testimonyAutoplay();



})();