document.getElementsByClassName('fa')[0].addEventListener('click', function(){
	var panda = document.getElementsByClassName('pandas')[0];
	panda.classList.add('fantasma'); //agrego clase fantasma (display: none) a mi foto indicada
})
document.getElementsByClassName('fa')[1].addEventListener('click', function(){
	var panda = document.getElementsByClassName('pandas')[1];
	panda.classList.add('fantasma'); //agrego clase fantasma (display: none) a mi foto indicada
})
document.getElementsByClassName('fa')[2].addEventListener('click', function(){
	var panda = document.getElementsByClassName('pandas')[2];
	panda.classList.add('fantasma'); //agrego clase fantasma (display: none) a mi foto indicada
})
document.getElementsByClassName('fa')[3].addEventListener('click', function(){
	var panda = document.getElementsByClassName('pandas')[3];
	panda.classList.add('fantasma'); //agrego clase fantasma (display: none) a mi foto indicada
})

//boton restaurar todas las fotos
document.getElementById('restaurar').addEventListener('click', function(){
	document.getElementsByClassName('pandas')[0].classList.remove('fantasma');
	document.getElementsByClassName('pandas')[1].classList.remove('fantasma');
	document.getElementsByClassName('pandas')[2].classList.remove('fantasma');
	document.getElementsByClassName('pandas')[3].classList.remove('fantasma');
})