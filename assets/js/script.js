  $(document).ready(function($) {
    $('#accordion div').hide();
    $('#accordion p span').click(function() {
      var $targetDiv = $(this).closest('p').next();
      var isHidden = $targetDiv.is(':hidden');

      $('#accordion div').slideUp();
      if (isHidden) {
        $targetDiv.slideDown();
      }
      return false;
    });
  });



  