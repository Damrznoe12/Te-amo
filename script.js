$(document).ready(function(){
    // Al cargar la página, ocultamos las cortinas
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');
  
    $('.valentines-day').click(function(){
      // Animación de desvanecimiento de los elementos del sobre
      $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
      $('.envelope').fadeOut(800, function() {
        // Ocultar elementos dentro de .valentines-day
        $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
        
  
        // Hacer visible la carta con una animación ondulante
        $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
        $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
          $(this).css('transform', 'scale(' + scale + ')');
        }}); // Animación de ondulación
        
      });
    });

    $(document).ready(function() {
      $('#heart-container').click(function() {
        $('#card').toggle(); // Cambiar la visibilidad de la carta al hacer clic
      });
    });
    

    // Espera a que todo el contenido de la página haya cargado
window.addEventListener('load', function() {
  // Selecciona el elemento de audio por su ID
  var audio = document.getElementById('love-audio');
  
  // Reproduce la música automáticamente
  audio.play().catch(function(error) {
    // Si el navegador bloquea la reproducción automática, manejar el error aquí
    console.log("El navegador ha bloqueado la reproducción automática.");
  });
});
  });
