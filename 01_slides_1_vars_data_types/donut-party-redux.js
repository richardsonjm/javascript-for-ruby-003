

  $(function(){

    $('#donut-party-redux').submit(function(){

      var guests, donuts, status;

      guests = $(this).find('input:eq(0)').val();
      //guests = $('#guest').val();
      donuts = $(this).find('input:eq(1)').val();
      //donuts = $('#donuts').val();
      guests = parseFloat(guests);
      donuts = parseFloat(donuts);

      if (guests>donuts) {
        status = 'hungry';
      } 
      else {
        status = 'happy';
      }

      $('#status').text(status);

      return false;
    });

  });
    
