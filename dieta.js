// fade in quando eu scrollo adicionando a classe .visible na minha div main-sec 
$(document).ready(function() {
    $(window).scroll(function() {
      $(".scroll-show").each(function() {
        var topDistance = $(this).offset().top;
        var windowHeight = $(window).height();
        if (topDistance - windowHeight < $(window).scrollTop()) {
          $(this).addClass("visible");
        }
      });
    });
});

$(document).ready(function(){
    $(".header").hide()
    .delay(2000)
    .fadeIn("ease")
})

