function mascara(obj,fun){
    v_obj=obj
    v_fun=fun
    setTimeout("validaMascara()",1)
}

function validaMascara(){
    v_obj.value=v_fun(v_obj.value)
}

function MascaraCpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}

function MascaraCep(v){

    v=v.replace(/\D/g,"")      //Remove tudo o que não é digito
    v=v.replace(/(\d{5})(\d)/,"$1-$2")   //Coloca hífen entre o qunto e o sexto digito
    return v;
}

function MascaraTelefone(v){
    
    v=v.replace(/\D/g,"")      //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");    //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function MascaraData(v){
        v=v.replace(/\D/g,"");
        v=v.replace(/(\d{2})(\d)/,"$1/$2")
        v=v.replace(/(\d{2})(\d)/,"$1/$2")
    
        v=v.replace(/(\d{2})(\d{2})$/,"$1$2")
        return v;
    }
    
