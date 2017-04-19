(function(){
	var formulario = document.formulario_registro,
			elementos = formulario.elements;

			// Functions
			var validarInputs = function(){
				for(var i = 0; i < elementos.length; i++){
					if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
						if(elementos[i].value == 0){
							console.log('el campo ' + elementos[i].name + ' no esta completo');
							elementos[i].className = elementos[i].className + ' error';
							return false;
						}else {
							elementos[i].className = elementos[i].className.replace("error", "");
						}
					}
				}
				if(elementos.pass.value !== elementos.pass2.value){
					elementos.pass.value = "";
					elementos.pass2.value = "";
					elementos.pass.className = elementos.pass.className + " error";
					elementos.pass2.className = elementos.pass2.className + " error";
				} else {
					elementos.pass.className = elementos.pass.className.replace(" error", "");
					elementos.pass2.className = elementos.pass2.className.replace(" error", "");
				}
			return true;
			};

			var validarRadios = function(){
				var opciones = document.getElementsByName('sexo'),
					resultado = false;

					for(var i = 0; i < elementos.length; i++){
						if (elementos[i].type == "radio" && elementos[i].name == "sexo"){
							for (var o = 0; o < opciones.length; o++){
								if(opciones[o].checked){
									resultado = true;
									break;
								}
							}
									if (resultado == false){
										elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
										console.log("el campo sexo esta incompleto");
										return false;
									} else {
											elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
											return true;
										}
						 }
			 	  }
			};



			var validarCheckbox = function(){
				var opciones = document.getElementsByName('terminos'),
					resultado = false;

					for(var i = 0; i < elementos.length; i++){
						if (elementos[i].type == "checkbox"){
							for (var o = 0; o < opciones.length; o++){
								if(opciones[o].checked){
									resultado = true;
									break;
								}
							}
									if (resultado == false){
										elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
										console.log("el campo checkbox esta incompleto");
										return false;
									} else {
											elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
											return true;
									}
						 }
			 	  }
			};

			// validar envio

			var destino = "index.html";

			function redireccionar(){
				location.href= destino;
			};



			var enviar = function(e){
				if(!validarInputs()){
					console.log('Falto validar los Inputs');
					e.preventDefault();
				}else if(!validarRadios()){
					console.log('Falto validar los Radio');
					e.preventDefault();
				}else if(!validarCheckbox()){
					console.log('Falto validar los checkbox');
					e.preventDefault();
				}else if (!reedireccionar()){
					console.log('Envia correctamente')
					// comentar la línea cuando el formulario este listo
				 //e.preventDefault();
				}else {
				console.log("no se a podido enviar")
			}
		}


			// Funciones Blur y focus
			var focusInput = function(){
				this.parentElement.children[1].className = "label active";
				this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");

			};

			var blurInput = function(){
				if(this.value <= 0){
					this.parentElement.children[1].className = "label";
					this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
				}
			};

			// Eventos
			formulario.addEventListener("submit", enviar);
			for (var i = 0; i < elementos.length; i++){
				if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
				elementos[i].addEventListener("focus", focusInput);
				elementos[i].addEventListener("blur", blurInput);
			}
		}
}())
