// fade in quando eu scrollo adicionando a classe .visible na minha div main-sec 
$(document).ready(function() {
    $(window).scroll(function() {
      $(".main-sec").each(function() {
        var topDistance = $(this).offset().top;
        var windowHeight = $(window).height();
        if (topDistance - windowHeight < $(window).scrollTop()) {
          $(this).addClass("visible");
        }
      });
    });
});
  


$(function(){
    $(document).tooltip()
})

//adicionando fadein no titulo

$(function(){

    $('h1')
    .hide()
    .delay(1000)
    .fadeIn("slow")

})

$(function(){
    $('h2.cbum')
    .css("color", "white")
    .hover(
        function(){
            $(this).css('color', '#8659f7');
        },
        function(){
            $(this).css('color', 'white');
        }
    );

})
 
$(function(){
    $("h2.ramon-tit")
    .css("color", "white")
    .hover(
        function(){
            $(this).css('color', '#8659f7');
        },
        function(){
            $(this).css('color', 'white');
        }
    );
})

//menu dropdown 

$(function(){
    $('.main li').hover(
        function(){
            $('ul.sub').slideDown(500)
        },
        function(){
            $('ul.sub', this).slideUp(300)
        }
    )
})

$(function(){
    $('a.link').hover(
        function(){
            $(this).parent().css('background-color', 'rgb(95, 85, 233)')
        },
        function(){
            $(this).parent().css('background-color', '#0b0d70')
        }
    )
})

//alerta ao fim da pagina
/* $(document).ready(function() {
    var alertaExibido = false; // variável para verificar se o alerta já foi exibido
  
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && !alertaExibido) {
        alert("Você chegou ao final da página! Se essa pagina te ajudou em algo, o mínimo que seja, saiba que deu bastante trabalho para fazer. na página inicial ao rolar até o fim tem minhas redes sociais e informações para doação se quiser ajudar, toda ajuda é bem vinda!");
        alertaExibido = true; // definimos a variável para true para que o alerta não seja exibido novamente
        }
    });
});
   */

// fadeIn no aviso flutuante
$(document).ready(function() {
    // código opcional para animar o balão ao ser exibido
    $('#balao-flutuante').hide().fadeIn(1000);
});