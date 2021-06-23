///-----------------------------------------------USUARIOS
var recibidos = [
    {

        emisor: 'Juan Perez',
        correoEmisor: 'jperez@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    },
    {

        emisor: 'Pablo Matamoros',
        correoEmisor: 'pablom@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    },
    {

        emisor: 'Maria Fernanda',
        correoEmisor: 'mariaf@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    },
    {

        emisor: 'Julio Paz',
        correoEmisor: 'jpaz@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    },
    {

        emisor: 'Carla Sosa',
        correoEmisor: 'csosa@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    }
];

var enviados = [
    {
        receptor: 'Pedro Martinez',
        emailReceptor: 'pmartinez@gmail.com',
        asunto: 'Saludos desde Intibucá',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '11:00am'
    },
    {
        receptor: 'Tony Hernandez',
        emailReceptor: 'tonyh@gmail.com',
        asunto: 'Saludos desde Intibucá',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '11:00am'
    },
    {
        receptor: 'Juan Orlando',
        emailReceptor: 'ojuan@gmail.com',
        asunto: 'Saludos desde Intibucá',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '11:00am'
    },
    {
        receptor: 'Mel Zelaya',
        emailReceptor: 'mzelaya@gmail.com',
        asunto: 'Saludos desde Intibucá',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '11:00am'
    }

]

var papelera = [
    {

        emisor: 'Juan Perez',
        correoEmisor: 'jperez@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam: false
    }
]
var destacados = [];
var spam = [];
console.log('recibidos', recibidos);
console.log('enviados', enviados);
var localStorage = window.localStorage;
  localStorage.clear();
  localStorage.setItem('recibidos', JSON.stringify(recibidos));
  localStorage.setItem('enviados', JSON.stringify(enviados));
  localStorage.setItem('papelera', JSON.stringify(papelera));

  function generarRecibidos(){
    document.getElementById('listaCorreos').innerHTML = '';
    for (let i = 0; i < recibidos.length; i++) {
        document.getElementById('listaCorreos').innerHTML += 
        `
        <div class="emailList">
            <div class="emailRow">
                <div class="emailRowOptions">
                    <button class="btn btn-primary" onclick="marcarDestacado(${i})"><i class="far fa-star"></i></button>
                    <button class="btn btn-primary" onclick="marcarSpam(${i})"><i class="fas fa-exclamation-triangle"></i></button>

                </div>
                <h3 class="emailRowTittle">${recibidos[i].emisor}</h3>
                <div class="emailRowMessage">
                    
                    <h4>${recibidos[i].asunto} - ${recibidos[i].mensaje}</h4>
                </div>
                <p class="emailRowTIme">${recibidos[i].hora}</p>
                <button class="btn btn-danger" onclick="eliminarMensaje(${i})"><i class="far fa-trash-alt"></i></button>

            </div>
        </div>
        `  
    }
  }
  generarRecibidos();
  function marcarDestacado(codigo){
      console.log('Destacado', codigo)
      if (recibidos[codigo].destacado == true ){
          recibidos[codigo].destacado = false
          console.log(recibidos[codigo].destacado);
      }
      if (recibidos[codigo].destacado == false){
          recibidos[codigo].destacado = true
          console.log(recibidos[codigo].destacado);
      } 
      if (recibidos[codigo].destacado == true){
        let reci = codigo;
        console.log('Correo Destacado', reci);
        
        let nuevoDestacado = {
          emisor: recibidos[reci].emisor,
          correoEmisor: recibidos[reci].correoEmisor,
          asunto: recibidos[reci].asunto,
          mensaje: recibidos[reci].mensaje,
          hora: recibidos[reci].hora,
          leido: true,
          destacado: recibidos[codigo].destacado,
          spam: false
      }

        destacados.push(nuevoDestacado);
        localStorage.setItem('destacados', destacados);
        //let indice = codigo-1;
        recibidos.splice(codigo,1);
        localStorage.setItem('recibidos', recibidos);
        generarRecibidos();
      }
      
  }
  function marcarSpam(codigo){
    console.log('Spam', codigo)
    if (recibidos[codigo].spam == false){
        recibidos[codigo].spam = true
        console.log(recibidos[codigo].spam);
    }
    if (recibidos[codigo].spam == true){
      let reci = codigo;
      console.log('Correo Spam', reci);
      
      let nuevoSpam = {
            emisor: recibidos[reci].emisor,
            correoEmisor: recibidos[reci].correoEmisor,
            asunto: recibidos[reci].asunto,
            mensaje: recibidos[reci].mensaje,
            hora: recibidos[reci].hora,
            leido: true,
            destacado: false,
            spam: recibidos[reci].spam
        }
      spam.push(nuevoSpam);
      localStorage.setItem('spam', spam);
      //let indice = codigo-1;
      recibidos.splice(codigo,1);
      localStorage.setItem('recibidos', recibidos);
      generarRecibidos();
    }
    
}

  function generarDestacados(){
    document.getElementById('listaCorreos').innerHTML = '';
    for (let i = 0; i < destacados.length; i++) {
        document.getElementById('listaCorreos').innerHTML += 
        `
        <div class="emailList">
        <div class="emailRow">
            <div class="emailRowOptions">
                <button class="btn btn-primary"><i class="far fa-star"></i></button>
                <button class="btn btn-primary"><i class="fas fa-exclamation-triangle"></i></button>

            </div>
            <h3 class="emailRowTittle">${destacados[i].emisor}</h3>
            <div class="emailRowMessage">
                
                <h4>${destacados[i].asunto} - ${destacados[i].mensaje}</h4>
            </div>
            <p class="emailRowTIme">${destacados[i].hora}</p>
            <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>


        </div>
    </div>
        `
        
    }
  }
  function generarSpam(){
        document.getElementById('listaCorreos').innerHTML = '';
        for (let i = 0; i < spam.length; i++) {
            document.getElementById('listaCorreos').innerHTML += 
            `
            <div class="emailList">
            <div class="emailRow">
                <div class="emailRowOptions">
                    <button class="btn btn-primary"><i class="far fa-star"></i></button>
                    <button class="btn btn-primary"><i class="fas fa-exclamation-triangle"></i></button>
    
                </div>
                <h3 class="emailRowTittle">${spam[i].emisor}</h3>
                <div class="emailRowMessage">
                    
                    <h4>${spam[i].asunto} - ${spam[i].mensaje}</h4>
                </div>
                <p class="emailRowTIme">${spam[i].hora}</p>
                <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
    
    
            </div>
        </div>
            `
            
        }
      
  }

  function generarEnviados(){
    document.getElementById('listaCorreos').innerHTML = '';
    for (let i = 0; i < enviados.length; i++) {
        document.getElementById('listaCorreos').innerHTML += 
        `
        <div class="emailList">
        <div class="emailRow">
            <div class="emailRowOptions">
                <button class="btn btn-primary"><i class="far fa-star"></i></button>
                <button class="btn btn-primary"><i class="fas fa-exclamation-triangle"></i></button>

            </div>
            <h3 class="emailRowTittle">${enviados[i].receptor}</h3>
            <div class="emailRowMessage">
                
                <h4>${enviados[i].asunto} - ${enviados[i].mensaje}</h4>
            </div>
            <p class="emailRowTIme">${enviados[i].hora}</p>
            <button class="btn btn-danger" ><i class="far fa-trash-alt"></i></button>


        </div>
    </div>
        `
        
    }
  }
  function eliminarMensaje(codigo) {
      let reci = codigo;
      console.log('Correo Eliminado', reci);
      console.log();
      let nuevoPapelera = {
        emisor: recibidos[reci].emisor,
        correoEmisor: recibidos[reci].correoEmisor,
        asunto: recibidos[reci].asunto,
        mensaje: recibidos[reci].mensaje,
        hora: recibidos[reci].hora,
        leido: true,
        destacado: true,
        spam: false
    }
      papelera.push(nuevoPapelera);
      localStorage.setItem('papelera', papelera);
      let indice = codigo-1;
      recibidos.splice(indice,1);
      localStorage.setItem('recibidos', recibidos);
      generarRecibidos();

      //(console.log(rec);
      //console.log('Enviar a papelera', recibidos);
  }
  function generarEliminados(){
    document.getElementById('listaCorreos').innerHTML = '';
    for (let i = 0; i < papelera.length; i++) {
        document.getElementById('listaCorreos').innerHTML += 
        `
        <div class="emailList">
        <div class="emailRow">
            <div class="emailRowOptions">
                <button class="btn btn-primary"><i class="far fa-star"></i></button>
                <button class="btn btn-primary"><i class="fas fa-exclamation-triangle"></i></button>

            </div>
            <h3 class="emailRowTittle">${papelera[i].emisor}</h3>
            <div class="emailRowMessage">
                
                <h4>${papelera[i].asunto} - ${papelera[i].mensaje}</h4>
            </div>
            <p class="emailRowTIme">${papelera[i].hora}</p>
            <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>


        </div>
    </div>
        `
        
    }
  }
  function enviarCorreo(){
      console.log('Enviar');
      let txtDe = document.getElementById('txt-de').value;
      let txtPara = document.getElementById('txt-para').value;
      let txtAsunto = document.getElementById('txt-asunto').value;
      let txtMensaje = document.getElementById('txt-mensaje').value;
      let txtHora = new Date().toLocaleTimeString();
      let nuevo = {
        receptor: txtPara,
        emailReceptor: '',
        asunto: txtAsunto,
        mensaje: txtMensaje,
        hora: txtHora
      }
      console.log(nuevo);
      enviados.push(nuevo);
      localStorage.setItem('enviados', JSON.stringify(enviados));
      cerrar();
      generarEnviados();
    
  }


(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function redactar() {
    console.log('Hola');
        var foo = document.getElementById('redactarMensaje');
        if(foo.style.display == '' || foo.style.display == 'none'){
             foo.style.display = 'block';
        }
        
     }
function cerrar(){
    var foo = document.getElementById('redactarMensaje');
    if(foo.style.display == 'block'){
        foo.style.display = 'none';
    }
}