$('.program-button').click(function() {
  $('.program-moretext').slideToggle();
  if ($('.program-button').text() == "Read more") {
    $(this).text("Less")
  } else {
    $(this).text("Read more")
  }
});