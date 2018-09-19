$(document).ready(function() {
  $('.main-menu-item').each(function() {
    let isContain = $(this).is(function() {
      return $('.sub-menu', this).length > 0;
    });
    if (isContain) {
      $(this).find('.main-menu-link').append(`
      	<svg fill="grey">
					<use xlink:href="#chevron" />
				</svg>
      	`);
    }
    let children = $(this).find('.sub-menu li').length;
    if (children > 6) {
      $(this).find('.sub-menu').css({
        'max-height': 264,
        'overflow-y': 'scroll'
      })
    }
  });

  $('.main-banner').on('init', function() {
    doAnimations($('.main-banner-item').find('[data-animation]'));
  });

  $('.main-banner').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    doAnimations($('.main-banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]'));
  });

  $('.main-banner').slick({
    'rows': 0,
    'dots': true,
    'nextArrow': `<button type="button" class="slick-next">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`,
    'prevArrow': `<button type="button" class="slick-prev">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`
  });

  $('.slider-news').slick({
    'slidesToShow': 3,
    'rows': 0,
    'dots': true,
    'nextArrow': `<button type="button" class="slick-next">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`,
    'prevArrow': `<button type="button" class="slick-prev">
  									<svg fill="black">
											<use xlink:href="#chevron" />
										</svg>
									</button>`
  })

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var animationDelay = $(this).data('delay');
      var animationType = 'animated ' + $(this).data('animation');
      $(this).css({
        'animation-delay': animationDelay,
        '-webkit-animation-delay': animationDelay
      });
      $(this).addClass(animationType).one(animationEndEvents, function() {
        $(this).removeClass(animationType);
      });
    });
  };

  $('#video').YTPlayer({
    videoURL: 'https://www.youtube.com/watch?v=F-CmFX5pKHU',
    containment: '.video-action',
    ratio: 'auto',
    mute: true,
    loop: true,
    optimizeDisplay: false,
    /*anchor:'bottom, center',*/
    startAt:0,
    realfullscreen: true,
    showControls: false,
    onError: function () {
    	console.log(this);
    }
  });

  $('.search').on('click',function (event) {
  	event.preventDefault();
  	$('.search-block').addClass('show');
  	$('.search-block').find('input').focus();
  });

  $('.cancel').on('click',function () {
  	$('.search-block').removeClass('show');
  	$('.search-block').find('input').val('')
  })

});
