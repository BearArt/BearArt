	/*creamos el arreglo y agregamos las imagenes*/
				var imagenes=new Array(
				['img/img1.png'],['img/img2.png'],['img/img3.png']);

				var contador=0;
				/* creamos la funcion que cambiara las imagenes*/
				function rotarImagenes()
				{
					contador++
					document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];
				}
				/*iniciamos la funcion en cuanto la página carge*/
				onload=function()
				{
					rotarImagenes();

					setInterval(rotarImagenes,5000);
				}
				