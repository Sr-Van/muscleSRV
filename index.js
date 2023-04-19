




$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('footer').addClass('show');
    } else {
      $('footer').removeClass('show');
    }
});



$(".social-icons").hover(
  function() {
    $(this).find(".hidden").fadeIn();
  },
  function() {
    $(this).find(".hidden").fadeOut();
  }
);

$('.search-bar').keyup(function(){
  var value = $(this).val().toLowerCase();
  $('#lista li').each(function(){
    var search = $(this).text().toLowerCase();
    if(search.indexOf(value) >- 1){
      $(this).show();
    
    }
    else{
      $(this).hide();
    }
  })
})

$('.search-bar').keyup(function() {
    var value = $(this).val().toLowerCase();
      if (value.length >= 1) {
        $('#lista').show();
      } else {
        $('#lista').hide();
    }
});


$('.search-icon').click(function() {
  $('.search-box').toggle();
});

$('.search-icon').click(function() {
  $('.search-box').fadeIn();
  $('.search-overlay').fadeIn();
});

$('.search-overlay').click(function() {
  $('.search-box').fadeOut();
  $('.search-overlay').fadeOut();
});



