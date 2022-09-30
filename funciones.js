function generarAleatorioDelDado(){
    let x = Math.random() * 5 + 1;   
    x = Math.round(x); 
    return x;
}

function mostrarDado(numero){
    let entrada = document.getElementById("SalidaDado");
    entrada.value = numero;
    let imagen = document.getElementById("dado");
    imagen.setAttribute("src", "./imagenes/dado" + numero + ".jpg");

}

function actualizarDado(){
    let x = generarAleatorioDelDado();
    mostrarDado(x);
}