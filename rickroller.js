// a donde redirigimos
const rrurl = 'https://blog.remax.com.ar/';

const form = document.querySelector('#formulario')

console.log()

// si hay cambios en el input rrinput
form.rrinput.addEventListener('change', ()=>{
    window.location.replace(rrurl);
})

// desviar envio si no hay clicks
const boton = document.querySelector('#continuar1')
boton.addEventListener('click', ()=>{    
    form.setAttribute('action', 'procesar.php');
})