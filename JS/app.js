(function(){
    // Variables y Objetos Generales
    var app = document.getElementById('app');
    var inputCaracteres= document.getElementById('numero-caracteres');
    var configuracion = {
        caracteres : parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minisculas: true
    }

    var caracteres = {
        numeros: '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! @ # $ % & / ( ) _ - { } ; : * ? ¿',
        mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minisculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }
alert("UNA CONTRASEÑA SEGURA DEBE CONTENER MÁS DE 12 CARACTERES");
// Evento_para_evitar_submit
app.addEventListener('submit', function(e){
    e.preventDefault();
});

app.elements.namedItem('input-pasword').addEventListener('click', function(){
    copiarPassword();
})
// Evento_incrementar
app.elements.namedItem('btn-mas-uno').addEventListener('click', function(){
    if(configuracion.caracteres<20){
    configuracion.caracteres++;
    inputCaracteres.value= configuracion.caracteres;
    }else{
        swal("Oops!", "Something went wrong on the page!", "error");
    }
    
});
// Evento_decrementar
app.elements.namedItem('btn-menos-uno').addEventListener('click', function(){
    if(configuracion.caracteres>1){
    configuracion.caracteres--;
    inputCaracteres.value= configuracion.caracteres;
}
});

// FUNCIONES
app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
    this.classList.toggle('false');
    this.childNodes[0].classList.toggle('fa-check');
    this.childNodes[0].classList.toggle('fa-times');
    configuracion.simbolos = !configuracion.simbolos;
});

app.elements.namedItem('btn-numero').addEventListener('click',function(){
    btnToggle(this);
    configuracion.numeros = !configuracion.numeros;
});

app.elements.namedItem('btn-Mayusculas').addEventListener('click', function(){
    btnToggle(this);
    configuracion.mayusculas = !configuracion.mayusculas;
});

//FUNCION PARA CAMBIAR EL ESTADO DE LOS BOTONES
function btnToggle(elemento){
    elemento.classList.toggle('false');
    elemento.childNodes[0].classList.toggle('fa-check');
    elemento.childNodes[0].classList.toggle('fa-times');
}

app.elements.namedItem('btn-generar').addEventListener('click', function(){
    generarPassword();
});

function generarPassword(){
    var caracteresfinales = '';
    var password = '';

    for(propiedad in configuracion){
        if(configuracion[propiedad] == true){
            caracteresfinales += caracteres[propiedad] + '';
        }   
    }

    caracteresfinales = caracteresfinales.trim(' ');
    caracteresfinales = caracteresfinales.split(' ');

    for(var i = 0; i < configuracion.caracteres; i++){
        password = password + caracteresfinales[Math.floor(Math.random() * caracteresfinales.length)];
    }
    
    app.elements.namedItem('input-pasword').value = password;
}

function copiarPassword(){
    app.elements.namedItem('input-pasword').select();
    document.execCommand('copy');
    document.getElementById('texto-copiado').classList.add('active');

    setTimeout(function(){
        document.getElementById('texto-copiado').classList.remove('active');
    }, 1000);
 
        alert("Gracias por utilizar el programa");
}

generarPassword();

}())




