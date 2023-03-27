$('.search .field input[type=search').focus(function (){
  $(this).parent().next('.hash-tag').css('display','block');
}).blur(function (){
  $(this).parent().next('.hash-tag').css('display','none');
});

$('.open-search').click(function (){
  $('.modal-search').addClass('active');
});

$('.close-search, section').click(function() {
  $('.modal-search').removeClass('active');
});