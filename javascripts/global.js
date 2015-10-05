$(window).load(function() {
  $('.bxslider').bxSlider({
    slideWidth: 212,
    slideMargin: 10,
    maxSlides: 7,
    speed: 1000,
    responsive: true,
    controls: false,
    infiniteLoop: true,
    pager: false,
    auto: true,
    moveSlides: 1
  });

  $(".js-button-input").on("click", function(){
    $(this).addClass("btn-reserve--width");
    setTimeout(function(){
      $(".js-button-input").fadeOut();
      $(".js-box--input").fadeIn();
      $(".js-input-email").focus();
    }, 300);
  });

  $(".js-do-booknow").on("click", function(){
    var emailVal = $(".js-input-email").val();
    if(validateEmail(emailVal)){
      Parse.initialize("1xzWcLBL9xXTP4s3XpdNYChaLP5MjZ7QPDNUiuDe", "co9aMd2V4V7DXeewbm9o27DRxES0NQup4iDWiWR1");
      Parse.Cloud.run('sendReservation', { email: emailVal }, {
        success: function(result) {
          alert(result);
        },
        error: function(error) {
          alert(error);
        }
      });
    }else{
      alert("Bad email, please type it again");
    }

  });

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
});
