(function ($) {
  $(document).ready(function(){
    var navbar = $('.links');
    $(function () {
        $(window).scroll(function() {
            var windscroll = $(this).scrollTop();
            if (windscroll >= $('#home').height()+28) {
                console.log(windscroll);
                navbar.removeClass('links');
                navbar.addClass('fixed');
                $('#work, #about').each(function(i) {
                    if (windscroll >= $(this).position().top-32) {
                        $('.nav-item.active').removeClass('active');
                        $('.nav-item').eq(i).addClass('active');
                    }
                });
            } else {
                $('.nav-item.active').removeClass('active');
                navbar.removeClass('fixed');
                navbar.addClass('links');
            }

        }).scroll();

        $('.nav-item').on('click', function() {
            
            var scrollAnchor = $(this).attr('data-scroll'),
                scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top+32;

            $('body,html').animate({
                scrollTop: scrollPoint
            }, 800);

            return false;

        });
    });

  });
}(jQuery));