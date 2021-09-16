$(document).ready(() => {
  $('.masters-block').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          centerMode: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          
        }
      }
    ]
  });



    $('.open-modal').click(() => {
      $('#reservation-container').css('display', 'flex');
    });
    $('#reservation-cancel-close, #reservation-container').click((e) => {
      if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close')
      $('#reservation-container').hide();
    });



    let loader = $('#loader')
   $('.reserve-btn').click(function(){
      $('.error-text').hide();
      
      let name = $('#name');
      name.css('border-color', 'rgb(174, 137, 89)');
      let reserveService = $('#reserve-service');
      reserveService.css('border-color', 'rgb(174, 137, 89)');
      let date = $('#date');
      date.css('border-color', 'rgb(174, 137, 89)');
      let phone = $('#phone');
      phone.css('border-color', 'rgb(174, 137, 89)');
      let reserveMaster = $('#reserve-master');
      reserveMaster.css('border-color', 'rgb(174, 137, 89)');
      let reserveTime = $('#reserve-time');
      reserveTime.css('border-color', 'rgb(174, 137, 89)');

      let hasError = false;
      

      if (!name.val()){
         name.css('border-color', 'red');
         name.siblings('.error-text').show();
         hasError = true;
      }
      if (reserveService.val() == 'error'){
         reserveService.css('border-color', 'red');
         reserveService.siblings('.error-text').show();
         hasError = true;
      }
      if (!date.val()){
         date.css('border-color', 'red');
         date.siblings('.error-text').show();
         hasError = true;
      }
      if (!phone.val()){
        phone.css('border-color', 'red');
        phone.siblings('.error-text').show();
        hasError = true;
      }
      if (reserveMaster.val()  == 'error'){
        reserveMaster.css('border-color', 'red');
        reserveMaster.siblings('.error-text').show();
        hasError = true;
      }
      if (reserveTime.val()  == 'error'){
        reserveTime.css('border-color', 'red');
        reserveTime.siblings('.error-text').show();
        hasError = true;
      }
      
      if (!name.val() || reserveService.val() == 'error' || !date.val() || !phone.val() || reserveMaster.val()  == 'error' || reserveTime.val()  == 'error') {
         return
      }
      if (name.val() && reserveService.val() && date.val() && phone.val() && reserveMaster.val() && reserveTime.val()) {
        $.ajax({
          type: 'POST',
          url: 'admin@barbershop.com ',
          data: 'name=' + name.val() + '&Service=' + reserveService.val() + 'date=' + date.val() + '&phone' + phone.val() + '&Master' + reserveMaster.val() + '&Time' + reserveTime.val(),
          success: () => {
            $('#tnanks-container').css('display', 'flex');
            $('#reservation-container').hide();
          }, 
          error: () => {
            $('#tnanks-container').css('display', 'flex');
            $('#reservation-container').hide();
          }
        });
      }
    })
      
    $('#thanks-cancel-close, #tnanks-container').click((e) => {
      if (e.target.id === 'tnanks-container' || e.target.id === 'thanks-cancel-close')
      $('#tnanks-container').hide();
    });

    $('.discount-btn').click(() => {
      $('#rebate-container').css('display', 'flex');
    });
    $('#rebate-cancel-close, #rebate-container').click((e) => {
      if (e.target.id === 'rebate-container' || e.target.id === 'rebate-cancel-close')
      $('#rebate-container').hide();
    });

      $('#burger').click(() => {
        $('.nav-list').addClass('open');
      })
      document.querySelectorAll('.nav-list > *').forEach((item) => {
        item.onclick = () => {
          $('.nav-list').removeClass('open')
        }
     })
      
   
});