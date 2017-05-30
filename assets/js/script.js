//Funcionalidad para incono X delete
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
document.getElementById('boton-restaurar').addEventListener('click', function(){
	//le quito la clase fantasma que le agregué anteriormente, o sea, le remuevo el display none
	document.getElementsByClassName('pandas')[0].classList.remove('fantasma');
	document.getElementsByClassName('pandas')[1].classList.remove('fantasma');
	document.getElementsByClassName('pandas')[2].classList.remove('fantasma');
	document.getElementsByClassName('pandas')[3].classList.remove('fantasma');
})


//Funcionalidad botón origin
document.getElementById('boton-origen').addEventListener('click', function(){
	//al hacer click en el botón indicado prendo el switch de toggle
	/*¿Que hace toggle? Verifica si mi elemento tiene la clase 'fantasma', si la tiene
	se la quita, si no la tiene se la agrega y así sucesivament.
	Pone la clase, quita la clase, pone la clase, quita la clase (y así en cada click)
	*/
	var parrafoIzquierdo = document.getElementsByClassName('parrafo')[0];
	parrafoIzquierdo.classList.toggle('fantasma');
})

/* LO MISMO QUE ARRIBA PERO OTRO MANERA DE ESCRIBIRLO
var botonOrigen = document.getElementById('boton-origen');
botonOrigen.addEventListener('click', parrafoIzquierdo);
function parrafoIzquierdo(){
	var parrafoIzquierdo = document.getElementsByClassName('parrafo')[0];
	parrafoIzquierdo.classList.toggle('fantasma');
}
*/

//funcionalidad botoón extinción
document.getElementById('boton-extincion').addEventListener('click', function(){
	var parrafoIzquierdo = document.getElementsByClassName('parrafo')[1];
	parrafoIzquierdo.classList.toggle('fantasma');
})

/* LO MISMO QUE ARRIBA PERO OTRO MANERA DE ESCRIBIRLO
var botonExtincion = document.getElementById('boton-extincion');
botonExtincion.addEventListener('click', parrafoDerecho);
function parrafoDerecho(){
	var parrafoDerecho = document.getElementsByClassName('parrafo')[1];
	parrafoDerecho.classList.toggle('fantasma');
}
*/

//arreglo de fotos que agrego a mi html como contenido dinámico
var images = ['assets/img/a1.jpg','assets/img/a2.jpg', 'assets/img/a3.jpg', 'assets/img/a4.jpg'];

//tomo mi div contenedor que está vacío en el HTML
var contenedor = document.getElementsByClassName('nuevasFotos')[0];
//recordar que los ClassName funcionan como un arreglo, se debe indicar la posición

images.forEach(function(elemento){ 
	/*recorro mi arreglo y en cada recorrido crea un elemento img
	le da el atributo src a cada posición iterada
	le agrega la clase 'nuevos-panda' el que tiene un padding y display inline-block
	finalmente le paso como hijo las imagenesPanda a su div contenedor
	*/
	var imagenesPanda = document.createElement('img');
	imagenesPanda.setAttribute('src', elemento);
	imagenesPanda.classList.add('nuevos-panda');
	contenedor.appendChild(imagenesPanda);
})