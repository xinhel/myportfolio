(function ($) {
  $(document).ready(function(){
	$('.links').each(function() {
		console.log($(this).parent().height())
		$(this).css('margin-top', $(this).parent().height()-$(this).height()-350)
	});
  });
}(jQuery));