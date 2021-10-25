function validaCampos()
let err = false;

//verificar Nome
if (document.getElementById ("Nome").value.length == 0){
	err = true;
	document.getElementById ("Nome").classList.add('required');
} else {
	document.getElementById ("Nome").classList.remove('required');
}

//verificar cpf
if (document.getElementById ("cpf").value.length == 0){
	err = true;
	document.getElementById ("cpf").classList.add('required');
} else {
	document.getElementById ("cpf").classList.remove('required');
}

//verificar telefone celular
if (document.getElementById ("tel_cel").value.length == 0){
	err = true;
	document.getElementById ("tel_cel").classList.add('required');
} else {
	document.getElementById ("tel_cel").classList.remove('required');
}

//validar campo sexo
if (document.getElementById ("sexo").value.length == 0){
	err = true;
	document.getElementById ("1BlSexo").classList.add('required');
} else {
	document.getElementById ("1BlSexo").classList.remove('required');
}

if (err) {
	alert("Por favor, preencher os campos obrigatoríos!");
} else {
	alert("Cadastro realizado com sucesso!");
	document.getElementByIdO("form1").submit();
}


