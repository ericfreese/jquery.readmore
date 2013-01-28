(function($) {
  $.fn.readmore = function(options) {
    var settings = $.extend({
      'clipHeight': '100px',
      'label': 'Read more'
    }, options);

    return this.each(function() {
      var $el = $(this);

      // Calculate the total height of the content
      var totalContentHeight = 0;
      $el.children().each(function(j, childEl) {
        totalContentHeight += $(childEl).outerHeight(true);
      });

      $el.css({
        'height': (typeof settings.clipHeight === 'function' ? settings.clipHeight.apply(this) : settings.clipHeight),
        'overflow': 'hidden'
      });

      // Only show the Read More link if the content is actually larger than the height of the container
      if (totalContentHeight > $el.height()) {
        $el.after($('<a class="read-more" href="#">' + settings.label + '</a>').on('click', function() {
          $el.trigger('readmore.beforeexpand');
          $(this).remove();
          $el.css('height', 'auto');
          $el.trigger('readmore.afterexpand');

          return false;
        }));
      }
    });
  };
})(jQuery);