
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
				}else{
					elementos.pass.className = elementos.pass.className.replace(" error", "");
					elementos.pass2.className = elementos.pass2.className.replace(" error", "");
				}
				return true;
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
				}else{
					console.log('Envia correctamente')
					// comentar la línea cuando el formulario este listo
				} e.preventDefault();
			};

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
				if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password")
				elementos[i].addEventListener("focus", focusInput);
				elementos[i].addEventListener("blur", blurInput);
			}
}())
