//copy
document.addEventListener("DOMContentLoaded", function() {
  var copiarContenidoBtn = document.getElementById("btnc");
  var miTextarea = document.getElementById("txtc");

  copiarContenidoBtn.addEventListener("click", function() {
    var contenido = miTextarea.value;
    var input = document.createElement("input");
    input.value = contenido;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    
  });
});

// Div move
function ctd() {
    var div = document.getElementById('dre');
    var nuevoTamaño = 99; 
    div.style.width = nuevoTamaño + '%';
    div.style.height = nuevoTamaño + '%';
    div.style.marginRight = '0.5%';
    div.style.display = 'flex';
    var div2 = document.getElementById('dvi');
    div2.style.display = 'none';
}

// Div move
function ctc() {
  var div = document.getElementById('dre');
    div.style.width = '50%';
    div.style.height = '99%';
    div.style.marginRight = '0%';
    div.style.display = 'flex';
    var div2 = document.getElementById('dvi');
    div2.style.width = '50%';
    div2.style.height = '99%';
    div2.style.marginRight = '0.5%';
    div2.style.display = 'flex';
    div2.style.display = 'flex'; 
}

// Div move
function cti() {
  var div = document.getElementById('dvi');
  var nuevoTamaño = 99; 
  div.style.width = nuevoTamaño + '%';
  div.style.height = nuevoTamaño + '%';
  div.style.marginRight = '0.5%';
  div.style.display = 'flex';
  var div2 = document.getElementById('dre');
  div2.style.display = 'none';
}

// result
function mostrarHTML() {
  var textoHTML = document.getElementById("txtc").value;
  document.getElementById("dvi").innerHTML = textoHTML;
}


//answer to sessionStorege
document.addEventListener('DOMContentLoaded', async () => {
  const resultadoConsulta = document.querySelector("#txtc");

  
  const respuesta = sessionStorage.getItem('respuesta');

  if (respuesta) {
      resultadoConsulta.innerHTML = respuesta;
  } else {
      resultadoConsulta.innerHTML = 'No hay respuesta disponible.';
  }
});


